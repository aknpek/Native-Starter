
resource "aws_dynamodb_table" "userInfo" {
  name           = "userInfo"
  read_capacity  = "2"
  write_capacity = "5"
  hash_key       = "Hash"

  attribute {
    name = "Hash"
    type = "S"
  }
}


output "dynamodb_table_arn" {
  value       = aws_dynamodb_table.userInfo.arn
  description = "The ARN of the DynamoDB table"
}
