// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose //NOTE: might not need

const wordSchema = new Schema ({
    word: {type: String,
         required: true, 
    },
    
})


const Word = mongoose.model('Word', wordSchema)
module.exports = Word