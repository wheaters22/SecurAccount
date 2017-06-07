var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  app.get("/customer", function(req, res) {

    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.get("/customer/:id", function(req, res) {

    db.Customer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Records]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/customer", function(req, res) {
=======
  app.get("/customers", function(req, res) {
    // setting the db to 'Record' so we will show the entire summary of that customer's account
    // using the other models to adjoin, however I'm not sure we need all of them. Also, we may only need certain columns; 
    //for the db.customers, I'm worried we'll also display the PW field
    db.Record.findAll({
      include: [db.vendors, db.institutions, db.customers]
    }).then(function(dbRecord) {
      res.json(dbRecord);
    });
  });

  app.get("/customers/:id", function(req, res) {
    db.Record.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Customer]
    }).then(function(dbRecord) {
      res.json(dbRecord);
    });
  });

  app.post("/customers", function(req, res) {
>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
    db.Customer.create(req.customer_name, req.customer_pw).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

<<<<<<< HEAD
  app.delete("/customer/:id", function(req, res) {
    db.Customer.destroy({
=======
  app.delete("/customers/:id", function(req, res) {
    db.Record.destroy({
>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

<<<<<<< HEAD
};
=======
};
>>>>>>> d9105f43d9912ef949cec1576b49e63062d66d50
