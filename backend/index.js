//DEPENDENCIES
const express = require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server= express();
const port = 8080;

//MIDDLEWARES
server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(helmet());

//ROUTES
const RecipeRouter=require('./routes/recipes');

//DEPRECATION WARNING SOLN
mongoose.set('strictQuery',false)

//DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/recipemomdb');

server.get('/',(request,response)=>{
    response.send('welcome to recipe API')
})

//ENDPOINTS
server.use('/api/recipes/v2',RecipeRouter)

server.listen(port,()=>{
    console.log(`server running on port ${port}`)
})