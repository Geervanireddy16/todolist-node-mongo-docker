const express = require('express')//imports express framework from node_modules
const path = require('path') //provides the path
const bodyParser = require('body-parser')//imports body-parser from node_modules
const mongoose = require('mongoose') //imports the mongoose module
const routes = require('./routes/routes') //imports routes.js from routes directory

const app = express() //creating express application

//Setting the mongoose connection
mongoose.connect('mongodb://mongo:27017/tododb',
   { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Mongodb Atlas connection
// mongoose.connect('mongodb+srv://root:root@cluster0.unnc2.mongodb.net/tododb?retryWrites=true&w=majority',
//   { useNewUrlParser: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));
  

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))) //joining the public directory and todo-list directory

app.use('/',routes) //maps '/' to the routes.js file

app.listen(3000,function(){ //connecting the app to the server
    console.log("Server is running on localhost:3000")
});
