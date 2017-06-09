
$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  
// LOGIN SUMMARY JS FUNCTIONS FOR SIGNUP AND LOGIN - TO COINCIDE WITH 'login.html' and call 
// still being worked on
// SIGN-UP WILL ALSO AUTHENTICATION FUNCTIONS
//

  // var custName = $("#LoginUser");
  // var custPW = $("LoginPassword");
  // var custContainer = $(".login-form");


  $(document).on("submit", "#transact-form", TransactFormSubmit);
  // $(document).on("click", ".delete-customer", handleDeleteButtonPress);

  // Getting the intiial list of Customers
  //getCustomer();

  // A function to handle what happens when the form is submitted to create a new Customer
  function TransactFormSubmit(event) {
    event.preventDefault();
    $.ajax({
      method: "POST"
      url: "/transaction" + id
    })
    .done(confirmResults);
  }
});
//AJAX CALL TO STORE DATA TO SERVER
//SERVER RESPONSE, CREATE FUNCTIONS TO DETERMINE ERRORS OR NOT



//RETURE ALL DATA TO summary.html via handlebars





// function getCustomers() {
//   $.get("/Customers")
// };

// function createRecordRow