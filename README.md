
Request Payload
The request payload will include a JSON with 4 fields.
● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You
should filter the data using “createdAt”
● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in
the documents should be between “minCount” and “maxCount”.
Sample: {
"startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000
}
Response Payload
Response payload should have 3 main fields.
● “code” is for status of the request. 0 means success. Other values may be used
for errors that you define.
● “msg” is for description of the code. You can set it to “success” for successful
requests. For unsuccessful requests, you should use explanatory messages.
● “records” will include all the filtered items according to the request. This array should
include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document.
Sample: {
"code":0, "msg":"Success", "records":[
{
"key":"TAKwGc6Jr4i8Z487", "createdAt":"2017-01-28T01:22:14.398Z", "totalCount":2800
}, {
} ]
}

starting project : npm run dev
testing: npm run test

// I have kept the name of this file generic so that it is classified according to the job it will do.

// Our project is generally prepared to meet an api method. The structure was completely prepared by me and has not been used anywhere before.
// MongoDb atlas cloud structure was used in the project. Atlas works for a limited time and with limited IP access. It is designed to run directly when the connection of the application is changed and when it has permissions.
// Jest is used for testing
// It can be used both with NodeIDE and added as a script for debug operations.
// CURL and Postman were also used during the development phase.
// Test catch returns from async operations are intentionally left blank. Because it would be illogical to have a test as well.
// Integration has not been added to test topics, only unit test has been implemented
// Even the object-mapper is for simplicity and pine is likewise helpful when developing