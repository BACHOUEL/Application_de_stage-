const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/TodoList',{
    useUnifiedTopology : true,
    useNewUrlParser : true , 
 
  
}, err => {
    if(err) console.log(`Error in DB Connectionn ${err}`)
    console.log(`MongoDB Connection Succeeded...`)
})