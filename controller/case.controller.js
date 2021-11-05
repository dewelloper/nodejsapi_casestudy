const caseService  = require('../service/case.service');
const logger = require('../logger/api.logger');

// In practice, a collection named case was used to process crude according to the scenario.
// The case that was posted in another thread is designed to rotate itself and also to rotate all other cases.

class CaseController {

    async getCases(req, res) {
        logger.info('Controller: getCases');
        return await caseService.getCases(req, res);
    }

    // POST for single case object
    async createCase(req, res) {
        logger.info('Controller: createCase', req.body);
        return await caseService.createCase(req, res);
    }

    //POST as return with other cases
    async createCaseReturnAll(req, res) {
        logger.info('Controller: createCaseReturnAll', req.body);
        return await caseService.createCaseReturnAll(req, res);
    }

    //PUT it would be POST also: updates a case
    async updateCase(req, res) {
        logger.info('Controller: updateCase', req.body);
        return await caseService.updateCase(req, res);
    }

    //not implemented all
    async deleteCase(req, res) {
        logger.info('Controller: deleteCase', req.body);
        return await caseService.deleteCase(req, res);
    }
}
module.exports = new CaseController();
