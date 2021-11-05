const { ObjectId } = require('bson');
const { connect, disconnect } = require('../config/db.config');
const logger = require('../logger/api.logger');
const { Case } = require('../model/case.model');

class CaseRepository {

    constructor() {
        connect();
    }

    async getCases(cid) {
        try
        {
            if(cid != null)
            {
                return await Case.findOne({_id:cid});
            }
            else{
                return await Case.find({});
            }
        }
        catch(err){
            logger.error('Error::' + err);
        }
    }

    async createCase(acase) {
        let result = {};
        try {
            result = await Case.create(acase);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return result;
    }

    async updateCase(acase) {
        let result = {};
        try {
            result = await Case.findByIdAndUpdate(
                {_id: acase._id},
                acase,
                {new: true}
              )
        } catch(err) {
            logger.error('Error::' + err);
        }
        return result;
    }

    async deleteCase(acase) {
        let result = {};
        try {
            result = await Record.deleteOne({_id : acase.id});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new CaseRepository();