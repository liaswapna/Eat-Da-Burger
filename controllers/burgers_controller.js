
const burger = require('../models/burger')

module.exports = (app)=>{
  
  app.get('/',function(req,res){
    burger.selectAll(function(data){
      res.render('index',{burger: data})
    })
  })

  app.post('/api/burgers',function(req,res){
    burger.insertOne("burger_name",req.body.burger_name,function(result){
      res.json({ id: result.insertId });
    })
  })

  app.put('/api/burger',function(req,res){
    burger.updateOne("devoured",req.body.id,function(result){
      res.json({ id: result.insertId });
    })
  })

  app.delete('/api/burger',function(req,res){
    burger.deleteOne(req.body.id,function(result){
      res.json({ id: result.insertId });
    })
  })

}

