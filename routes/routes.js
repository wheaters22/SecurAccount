var db = require("../models");
var path = require("path");
module.exports = function(app) {

  //main page/initial load (start with login.html, change to splash as project progresses)
  app.get("/login", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login");
  });

  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("index");
  });

  // jlb 6-6-2017 1452 from wheatley-0604
  app.post("/customers", function(req, res) {
    db.Customer.create({
      customer_name: req.body.customer_name,
      customer_pw: req.body.customer_pw
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
	  }).catch(function(err){
      console.log("app customers error");
      res.json(err);
	  });
  });
};

  app.get("/login", function(req, res) {
       res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
       res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //  app.get("/customers", function(req, res) {

  //      db.Customers.findAll({}).then(function(dbCustomers) {
  //         res.json(dbCustomers);
  //      });
  // });

//MAKE A SIGNUP HTML PAGE AND GET REQUEST HERE....?

//CODE FROM CUSTOMER-ROUTES.JS FILE
   app.get("/customers:id", function(req, res) {
       db.Customer.findOne({
           where: {
              id: req.params.id
           },
           // include: [db.Customer]
      }).then(function(dbCustomer) {
           res.json(dbCustomer);
       }).catch(function(err) {
            console.log("id test error");
            res.json(err);
       });
  });

  app.post("/customers", function(req, res) {
      db.Customer.create(req.customer_name, req.customer_pw).then(function(dbCustomer) {
          res.json(dbCustomer);
       });
   });

   app.delete("/customers/:id", function(req, res) {
       db.Customer.destroy({
          where: {
               id: req.params.id
           }
           // include: [db.Records]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });
//create new customer in the database login
app.post("/customers", function(req, res) {
    db.Customer.create({
        customer_name: req.body.customer_name,
        customer_pw: req.body.customer_pw
    }).then(function(dbCustomer) {
        res.json(dbCustomer);
    }).catch(function(err) {
        console.log("app customers error");
        res.json(err);
    });
  });



//CODE FOR TRANSACTION.JS FILE
//create new record post - append to customer ID (after signup or loing; need to carry auth token)
app.post("/transact", function (req, res) {
  db.PayFroms.create({
    bank_name: req.body.bank_name // MUST MATCH "FORM" ELEMENT NAME
    //SHOULD I INCLUDE THE OTHER DB TABLES + FIELDS
  }).then(function(dbPayFroms) {
    res.json(dbPayFroms);
  });
})

}; //FINAL BRACKET

// app.get("/transact", function (req, res) {
//   db.PayFroms.findOne({
//     bank_name: req.body.bank_name
//     //SHOULD I INCLUDE THE OTHER DB TABLES + FIELDS
//   }).then(function(dbPayFroms) {

//CODE FROM model -> institution.js FILE

//get route for retrieving full customer record, after login + authentication:
// app.get("/customer:id")

// Need to include transact.html routes code here. Save all field rqd for other tables

//CODE FROM model -> records.js FILE



//CODE FROM model -> vendors.js FILE






//PLACE ALL ROUTES JS INTO THE ROUTES.JS FILE
// add all customer-api-routes into this page

