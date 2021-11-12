require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Case API",
        description: "This project has been prepared for a special case test"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Case",
            "description": "This is case rest endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
    definitions: {
        Record: {
            key: "XXXXXXXXXXX",
            createdAt: "2021.11.12",
            totalCount: 1
        },
        Case: {
            code: "XxXXXXX",
            msg: "Success.",
            record: {
                $ref: '#/definitions/Record'
            }
        },
        AddCase: {
            $startDate: "2021.11.12",
            $endDate: "2021.11.19",
            minCount: 200,
            maxCount:1220
        },
        Id:{
          _id: "a bson id for getting from mongodb"
        }
    }
}

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/case.route'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./service.js')           // project's root file
})
