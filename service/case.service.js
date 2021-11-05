const caseRepository  = require('../repository/case.repository');
const caseMapper  = require('../mapper/case.mapper');

class CaseService {

    constructor() {}

    async getCases(req, res) {
        try {
            res.status(200).json(await caseRepository.getCases(req.body._id));
        } catch (err) {
            res.status(400).json({ error: { message: err.message } });
        }
    }

    async createCase(req, res) {
            try {
                var newCase = req.body;
                newCase.totalCount = 1; // initial total count 0 because this is the first request
                newCase.createdAt = new Date().toISOString();
                var sourceResult = await caseRepository.createCase(newCase);
                var responsePayload = caseMapper.Map(sourceResult);
                res.status(200).json(responsePayload);
            } catch (err) {
                res.status(400).json({ error: { message: err.message } });
            }
    }

    async createCaseReturnAll(req, res) {
        try {
            var newCase = req.body;
            newCase.totalCount = 1; // initial total count 0 because this is the first request
            newCase.createdAt = new Date().toISOString();
            var sourceResult = await caseRepository.createCase(newCase);
            var allResults = await caseRepository.getCases(null);
            var responsePayload = caseMapper.MapWithSubItems(allResults);
            res.status(200).json(responsePayload);
        } catch (err) {
            res.status(400).json({ error: { message: err.message } });
        }
    }    

    async updateCase(req, res) {
        try {
            var acase = await caseRepository.getCases(req.body._id);
            acase.totalCount++;
            var updated = await caseRepository.updateCase(acase);
            res.status(200).json(updated);
        } catch (err) {
            res.status(400).json({ error: { message: err.message } });
        }
    }

    async deleteCase(req, res) {
        try {
            res.status(200).json(await caseRepository.deleteCase(req.body));
        } catch (err) {
            res.status(400).json({ error: { message: err.message } });
        }
    }

}

module.exports = new CaseService();