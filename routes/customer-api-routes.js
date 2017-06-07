var db = require("../models");

module.exports = function(app) {
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
    db.Customer.create(req.customer_name, req.customer_pw).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.delete("/customer/:id", function(req, res) {
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

};