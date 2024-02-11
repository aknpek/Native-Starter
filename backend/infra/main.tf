provider "aws" {
  region     = "eu-west-2"
  access_key = "localstack"
  secret_key = "localstack"

  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  s3_use_path_style           = true

  endpoints {
    s3         = "http://localstack:4566"
    iam        = "http://localstack:4566"
    lambda     = "http://localstack:4566"
    dynamodb   = "http://localstack:4566"
    apigateway = "http://localstack:4566"
    // add other services you need
  }
}

module "dynamodb" {
  source = "./modules/dynamodb"
}

data "archive_file" "local_processor_package" {
  type             = "zip"
  source_file      = "${path.module}/modules/lambda/src/index.py"
  output_file_mode = "0666"
  output_path      = "/modules/lambda/function.zip"
}


resource "aws_s3_bucket" "bucket" {
  for_each = toset(["bucket-a", "bucket-b", "bucket-c"])
  bucket   = each.key
}

# resource "aws_s3_bucket_acl" "s3_bucket" {
#   for_each = aws_s3_bucket.bucket
#   bucket   = aws_s3_bucket.bucket[each.key].id
#   acl      = "public-read-write"
# }

# resource "aws_s3_bucket_policy" "s3_bucket_policy" {
#   for_each = aws_s3_bucket.bucket
#   bucket   = each.value.id
#   policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [
#       {
#         Sid       = "PublicReadGetObject",
#         Effect    = "Allow",
#         Principal = "*",
#         Action    = "s3:GetObject",
#         Resource = [
#           "${each.value.arn}/*",
#         ],
#       },
#     ],
#   })
# }

# Lambda Function
resource "aws_lambda_function" "my_lambda" {
  function_name = "MyLambdaFunction"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "index.handler"
  timeout       = 60
  memory_size   = 128

  # Assuming you have a Lambda deployment package
  filename = "modules/lambda/function.zip"
  # source_code_hash = filebase64sha256("lambda/function.zip")

  source_code_hash = data.archive_file.local_processor_package.output_base64sha256
  # runtime          = "nodejs12.x"
  runtime = "python3.10"
}

# IAM role for Lambda
resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
        "Effect" : "Allow",
        "Sid" : ""
      },
    ],
  })
}

resource "aws_iam_policy" "lambda_dynamodb_write" {
  name        = "lambda_dynamodb_write_policy"
  description = "Allow Lambda to write to DynamoDB"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem"
        ],
        Effect   = "Allow",
        Resource = module.dynamodb.dynamodb_table_arn
      }
    ]
  })
}

# Attach the policy to the role
resource "aws_iam_role_policy_attachment" "lambda_dynamodb_attach" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = aws_iam_policy.lambda_dynamodb_write.arn
}

resource "aws_api_gateway_rest_api" "rest_api" {
  name        = "RestApiExample"
  description = "My API for demonstration purposes"
}

resource "aws_api_gateway_resource" "my_resource" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = var.api_path
}

resource "aws_api_gateway_method" "my_method" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.my_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_resource.my_resource.id
  http_method = aws_api_gateway_method.my_method.http_method

  integration_http_method = "POST" # Lambda functions are invoked with POST
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.my_lambda.invoke_arn
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.my_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.rest_api.execution_arn}/${var.stage_name}/GET/${var.stage_name}"
}

resource "aws_api_gateway_deployment" "example" {
  depends_on = [
    aws_api_gateway_integration.lambda_integration,
  ]
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  stage_name  = var.stage_name
}


output "local_invoke_url_with_curl" {
  value       = "http://${aws_api_gateway_rest_api.rest_api.id}.execute-api.localhost.localstack.cloud:4566/${var.stage_name}/${var.api_path}"
  description = "Local Invoke URL with `curl --location=value "
}

output "local_invoke_url_with_postman" {
  value       = "http://localhost:4566/restapis/${aws_api_gateway_rest_api.rest_api.id}/${var.stage_name}/_user_request_/${var.api_path}"
  description = "Local Invoke URL from postman get request"
}

output "invoke_url" {
  value = "${aws_api_gateway_deployment.example.invoke_url}/${var.api_path}"
}
