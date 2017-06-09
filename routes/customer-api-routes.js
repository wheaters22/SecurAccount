// var db = require("../models");

// module.exports = function(app) {
//   app.get("/customers", function(req, res) {

//     db.Customers.findAll({
//     }).then(function(dbCustomers) {
//       res.json(dbCustomers);
//     });
//   });

//   app.get("/customers/:id", function(req, res) {
//     db.Record.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Customer]
//     }).then(function(dbcustomers) {
//       res.json(dbRecord);
//     });
//   });

//   app.post("/customers", function(req, res) {
//     db.Customer.create(req.customer_name, req.customer_pw).then(function(dbCustomer) {
//       res.json(dbCustomer);
//     });
//   });

//   app.delete("/customers/:id", function(req, res) {
//     db.Record.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbCustomer) {
//       res.json(dbCustomer);
//     });
//   });

// };
