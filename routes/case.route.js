const caseController = require('../controller/case.controller')

const express = require('express');
const router = express.Router();



    router.get('/', (req, res) => {
        caseController.getCases(req, res).then(data => res.json(data));
    });

    router.post('/', (req, res) => {
        console.log(req.body);
        caseController.createCase(req, res).then(data => res.json(data));
    });


    router.post('/casereturnall', (req, res) => {
        console.log(req.body);
        caseController.createCaseReturnAll(req, res).then(data => res.json(data));
    });
    
    // router.put('/', (req, res) => {
    //     caseController.updateCase(req, res).then(data => res.json(data));
    // });
    
    router.delete('/:id', (req, res) => {
        caseController.deleteCase(req, res).then(data => res.json(data));
    });
    

    module.exports = router;
