var db = require("../models");

module.exports = function(app) {
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
    db.Customer.create(req.customer_name, req.customer_pw).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.delete("/customers/:id", function(req, res) {
    db.Record.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

};
