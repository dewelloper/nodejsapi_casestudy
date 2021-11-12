const caseController = require('../controller/case.controller')

const express = require('express');
const router = express.Router();



    router.post('/getacase', (req, res) => {
        /* 	#swagger.tags = ['Case']
            #swagger.description = 'Endpoint to post case' */

        /*	#swagger.parameters['obj'] = {
                in: 'body',
                description: 'Case information.',
                required: true,
                schema: { $ref: "#/definitions/Id" }
        } */
        caseController.getCases(req, res).then(data => res.json(data));

        /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/Case" },
        description: "Case got successfully." } */          
    });

    router.post('/case', (req, res) => {
        /* 	#swagger.tags = ['Case']
            #swagger.description = 'Endpoint to post case' */

        /*	#swagger.parameters['obj'] = {
                in: 'body',
                description: 'Case information.',
                required: true,
                schema: { $ref: "#/definitions/AddCase" }
        } */

        /* #swagger.security = [{
                "apiKeyAuth": []
        }] */        
        console.log(req.body);
        caseController.createCase(req, res).then(data => res.json(data));
    });


    router.post('/casereturnall', (req, res) => {
        /* 	#swagger.tags = ['Case']
            #swagger.description = 'Endpoint to post case' */

        /*	#swagger.parameters['obj'] = {
                in: 'body',
                description: 'Case information.',
                required: true,
                schema: { $ref: "#/definitions/AddCase" }
        } */

        /* #swagger.security = [{
                "apiKeyAuth": []
        }] */           
        console.log(req.body);
        caseController.createCaseReturnAll(req, res).then(data => res.json(data));
    });
    
    router.put('/case', (req, res) => {
        /* 	#swagger.tags = ['Case']
            #swagger.description = 'Endpoint to put case' */

        /*	#swagger.parameters['obj'] = {
                in: 'body',
                description: 'Case information.',
                required: true,
                schema: { $ref: "#/definitions/AddCase" }
        } */

        /* #swagger.security = [{
                "apiKeyAuth": []
        }] */  
        caseController.updateCase(req, res).then(data => res.json(data));

        /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/Case" },
        description: "Case update successfully." } */         
    });
    
    router.delete('/case:id', (req, res) => {
        // #swagger.tags = ['Case']
        // #swagger.description = 'Endpoint to delete a specific case.' 
    caseController.deleteCase(req, res).then(data => res.json(data));

        /* #swagger.responses[200] = { 
        schema: { "$ref": "#/definitions/Case" },
        description: "Case deleted successfully." } */        
        
    });
    

    module.exports = router;
