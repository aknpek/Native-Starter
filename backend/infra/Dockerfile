# Stage 1: Run LocalStack
FROM localstack/localstack as localstack

# Stage 2: Setup Terraform
FROM hashicorp/terraform:latest as terraform

ARG SERVICES
ARG LAMBDA_EXECUTOR
ARG LAMBDA_RUNTIME_ENVIRONMENT_TIMEOUT
ARG DATA_DIR
ARG DEBUG

ENV SERVICES=${SERVICES}

# Copy Terraform files from the host to the container
COPY /backend/infra .

# Copy Backend into the backend 
COPY ./backend/modules/ ./modules

# Initialize Terraform (downloads AWS provider)
RUN terraform init

# Apply Terraform (creates resources)
CMD ["apply", "-auto-approve"]
