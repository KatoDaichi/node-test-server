'use strict';

const express = require('express');
const app = express();
const parser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Parser
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// App
app.get('/', (req, res) => {
  res.json(
    [
      {
        "group": "ケースベース",
        "label": "総ケース数",
        "dailyValues": [
          {
            "date": "2020-03-23",
            "hourlyValues": [
              {
                "hour": 23,
                "value": "18149"
              }
            ]
          }
        ]
      },
      {
        "group": "ケースベース",
        "label": "累計 予定",
        "dailyValues": [
          {
            "date": "2020-03-23",
            "hourlyValues": [
              {
                "hour": 23,
                "value": "17920"
              }
            ]
          }
        ]
      }
    ]
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);