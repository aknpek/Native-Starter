import json

def handler(event, context):
    # Perform some operation, like reading from DynamoDB

    result = {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Hello from Lambda!",
            # Include any other response information here
        }),
        "headers": {
            "Content-Type": "application/json"
        }
    }
    return result
