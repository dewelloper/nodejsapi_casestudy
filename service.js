//Author: Hamit Yıldırım
//Date: 11.04.2021
//Version: 1.0
//Revision: 1

// I have kept the name of this file generic so that it is classified according to the job it will do.

// Our project is generally prepared to meet an api method. The structure was completely prepared by me and has not been used anywhere before.
// MongoDb atlas cloud structure was used in the project. Atlas works for a limited time and with limited IP access. It is designed to run directly when the connection of the application is changed and when it has permissions.
// Jest is used for testing
// It can be used both with NodeIDE and added as a script for debug operations.
// CURL and Postman were also used during the development phase.
// Test catch returns from async operations are intentionally left blank. Because it would be illogical to have a test as well.
// Integration has not been added to test topics, only unit test has been implemented
// Even the object-mapper is for simplicity and pine is likewise helpful when developing


const express = require('express')
      , url = require("url");
require('dotenv').config();
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded());

const indexRouter = require('./routes/index');
const caseRouter = require('./routes/case.route');
  
  //app.use('/', indexRouter); // no need to it anymore
  app.use('/', caseRouter);

  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.status(err.status || 500).send('error')
  });

  app.listen(port, () => {
      console.log(`Server listening on the port  ${port}`);
  })