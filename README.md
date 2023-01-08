# dynamodb-csv-to-json
Tasks:
- Need to grab historial weather data that puts time and temp in different arrays
- Combine time and temp as single object by querying API w/ ISO date string
- Convert csv data to json w/ (https://www.convertcsv.com/csv-to-json.htm)
- Convert json to DynamoDB format for batch write operations
- Use AWS cli to update DynamoDB table (`batch-write-item` requests are limited to 25 at a time)

Commands:
```bash
sudo apt install awscli
aws configure --profile YOUR_PROFILE
aws dynamodb batch-write-item --request-items file://export.json --profile YOUR_PROFILE
```

Resources:
- https://aws.amazon.com/blogs/database/implementing-bulk-csv-ingestion-to-amazon-dynamodb/
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.LoadData.html
- https://www.convertcsv.com/csv-to-json.htm
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html
- https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
- https://aws.amazon.com/blogs/database/how-to-perform-advanced-analytics-and-build-visualizations-of-your-amazon-dynamodb-data-by-using-amazon-athena/
- https://docs.aws.amazon.com/glue/latest/dg/console-crawlers.html
- https://www.sqlshack.com/getting-started-with-amazon-athena-and-s3/
