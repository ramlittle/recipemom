const router=require('express').Router();
const Recipes=require('../models/Recipes.js');

//RETURN ALL MENTORS

router.get('/',async (request,response)=>{
  const results = await Recipes.find({}).exec();
  response.send(results);

})


module.exports=router;