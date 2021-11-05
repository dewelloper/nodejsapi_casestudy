// When I looked at what was asked in the question, I realized that this model is not suitable for the desired structure 
// and there is no write permission. In order not to make mistakes, I did the related work on a new db.

const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({ 
                createdAt: 'date',  
                counts:  Array,
                value: String });

const Record = mongoose.model('records', caseSchema);

module.exports = {
    Record
}