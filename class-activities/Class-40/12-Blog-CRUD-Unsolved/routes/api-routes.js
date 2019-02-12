// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", async function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    const data = await db.Post.findAll({});
    res.json(data);
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", async function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    const category = req.params.category;
    const result = await db.Post.findAll({
      where:{
        category:category
      }
    });
    res.json(result);
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", async function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    const id = req.params.id;
    const result = await db.Post.findOne({
      where:{
        id:id
      }
    });
    res.json(result);
  });

  // POST route for saving a new post
  app.post("/api/posts", async function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    const title = req.body.title;
    const body = req.body.body;
    const category = req.body.category;
    console.log(title,body);
    const result = await db.Post.create({
      title:title,
      body:body,
      category:category
    });

    res.json(result);
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", async function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    const id = req.params.id;
    const result = await db.Post.destroy({
      where:{
        id:id
      }
    });
    res.json(result);
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    const title = req.body.title;
    const body = req.body.body;
    const category = req.body.category;
    const id = req.body.id;

    const result = db.Post.update({
      title:title,
      body:body,
      category:category
    },{
      where:{
        id:id
      }
    })
    res.json(result);
  });
};
