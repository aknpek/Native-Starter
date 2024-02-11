## Basic Features
✅ Themes
✅ Localization
✅ Custom Font
✅ Redux State Manager


# How To Locally

1. Install the packages after cloning the repo

```cli
npm install 
```

2. Run docker compose file to run backend with infra
```cli
docker compose up
```

## How to test the backend 
```cli
curl --location 'http://l8bu2i001p.execute-api.localhost.localstack.cloud:4566/local/my-resource'
```

## References:
- https://stackoverflow.com/questions/36560504/how-do-i-find-the-api-endpoint-of-a-lambda-function/44539898#44539898
- https://github.com/Unit2795/LocalStack-Terraform-AWS-Lambda/blob/main/main.tf