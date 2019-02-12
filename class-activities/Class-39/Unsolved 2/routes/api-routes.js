// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// const db = require('../models/index');

// Routes
// =============================================================
module.exports = function(app,db) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.todo.findAll()
    .then((data)=>{
      console.log(data);
      return res.json(data);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos",async function(req, res) {
    const newData = req.body.text;
    try{
      const result = await db.todo.create({
        text: newData
      });
      console.log(result);
      return res.json(result);
    }
    catch(err){
      console.log(`Please enter only alphanumeric characters 5-50 characters in length`);
      return res.sendStatus(404);
    }
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    const deleteId = req.params.id;
    const result = db.todo.destroy({
      where:{
        id:deleteId
      }
    });
    return res.json(result);
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", async function(req, res) {
    const newState = req.body.complete;
    const newText = req.body.text;
    const updateId = req.body.id;
    const result = await db.todo.update({
      complete:newState,text:newText},{
        where:{
          id:updateId
        }
      }
    //end update  
    );
    return res.json(result);
  });
};
