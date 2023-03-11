var express = require('express');
var router =express.Router();

router.get('/', function(req,res,next){
    res.render('index');
});

router.post('/chat', function(req,res,next){
    let name= req.body.name;
    res.render('chat',{name});
})

module.exports = router;
