const caseController = require('../controller/case.controller')

const express = require('express');
const router = express.Router();

///Swagger is implemented with YAML format. I tried to keep it simple
/**
 * @swagger
 * components:
 *   case:
 *     acase:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           required: true
 *         startDate:
 *           type: date
 *           required: false
 *         endDate:
 *           type: date
  *           required: false
 *         maxCount:
 *           type: integer
  *           required: false
 *         minCount:
 *           type: integer
  *           required: false
 *     Case:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The case ID.
 *               example: 0
 *         - $ref: '#/components/case/acase'
 */   

/**
 * @swagger
 * /api/case/find:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/case/acase'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/case/acase'
*/

    router.post('/find', (req, res) => {
        caseController.getCases(req, res).then(data => res.json(data));
    });


 
/**
 * @swagger
 * /api/case:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/case/acase'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/case/acase'
*/
    router.post('/', (req, res) => {
        console.log(req.body);
        caseController.createCase(req, res).then(data => res.json(data));
    });

/**
 * @swagger
 * /api/case/casereturnall:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/case/acase'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/case/acase'
*/    
    router.post('/casereturnall', (req, res) => {
        console.log(req.body);
        caseController.createCaseReturnAll(req, res).then(data => res.json(data));
    });
    
    router.put('/api/case', (req, res) => {
        caseController.updateCase(req, res).then(data => res.json(data));
    });
    
    router.delete('/api/case/:id', (req, res) => {
        caseController.deleteCase(req, res).then(data => res.json(data));
    });
    
    router.get('/', (req, res) => {
        res.send(`<h1>API Works !!!</h1>`)
    });

    module.exports = router;
