const data = [
    {
        "meter": 78914,
        "date": 1668533400,
        "dateISO": "2022-11-15T17:30",
        "month": "Jan",
        "weekday": "Sun",
        "year": 2022,
        "user": "test",
        "label": "home",
        "temp": 39.8
    },
    {
        "meter": 78918,
        "date": 1668596400,
        "dateISO": "2022-11-16T11:00",
        "month": "Jan",
        "weekday": "Mon",
        "year": 2022,
        "user": "test",
        "label": "home",
        "temp": 43.7
    },
    {
        "meter": 78921,
        "date": 1668601380,
        "dateISO": "2022-11-16T12:23",
        "month": "Jan",
        "weekday": "Mon",
        "year": 2022,
        "user": "test",
        "label": "home",
        "temp": 43.6
    },
];

const dynamoTable = { "dynamoTableName": [] }

//`batch-write-item` requests are limited to 25 at a time
for (i = 0; i < 24; i++) {
    let newItem = {
        "PutRequest": {
            "Item": {
                "meter": {
                    "N": data[i].meter.toString()
                },
                "date": {
                    "N": data[i].date.toString()
                },
                "dateISO": {
                    "S": data[i].dateISO.toString()
                },
                "month": {
                    "S": data[i].month.toString()
                },
                "weekday": {
                    "S": data[i].weekday.toString()
                },
                "year": {
                    "N": data[i].year.toString()
                },
                "user": {
                    "S": data[i].user.toString()
                },
                "label": {
                    "S": data[i].label.toString()
                },
                "temp": {
                    "N": data[i].temp.toString()
                },
            }
        }
    }
    dynamoTable["dynamoTableName"].push(newItem)
}

console.log(dynamoTable)