const db = require('../models');

 module.exports = function(app){
    app.get('/', async (req,res)=>{
        const data = db.post.findAll({});
        res.json(data);
    })
 }