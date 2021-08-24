const mongoose = require('mongoose')//importing express framework from node_modules

var todoSchema = new mongoose.Schema({
    name:String
})

var ToDo = mongoose.model("ToDo",todoSchema)

module.exports = mongoose.model('Todo', todoSchema);    // mongodb will change this Todo to todos
// this Todo is a collection