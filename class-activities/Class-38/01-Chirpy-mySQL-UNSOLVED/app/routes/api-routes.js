// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all",function(req,res){
    const sql = `SELECT * FROM chirps`
    connection.query(sql,function(err,data){
      if(err) throw err;
  
      console.log(data);
      res.json(data);
    });
  })

  // Add a chirp


};
