const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({ 
                startDate: 'date', 
                endDate: 'date', 
                createdAt: 'date', 
                minCount: { type: Number }, 
                maxCount: { type: Number },
                totalCount: { type: Number } });

const Case = mongoose.model('cases', caseSchema);

module.exports = {
    Case
}