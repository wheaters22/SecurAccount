$(document).ready(function(){

	$.ajaxSetup({
	    beforeSend: function(xhr) {
	        var token = sessionStorage.getItem("token");
	        if(token) 
	            xhr.setRequestHeader("authorization", token);
	    }
	});

	$("#login-btn").click("submit", function (event) {
	    event.preventDefault();
		var nameInput = $("#LoginUser");
		var pwInput = $("#LoginPassword");
		var postReqData = {
			customer_name: nameInput.val().trim(),
			customer_pw: pwInput.val().trim()
		}
	    ajaxSA("POST", "/authenticate", postReqData, sessStorAndGetRecords);
	});

	function sessStorAndGetRecords(data){
		sessionStorage.setItem("token", data.token);
		// ajaxSA("GET", "/records");
        $.ajax({
	        method: "GET",
	        url: "/records",
	        data: {},
	        success: function(completeHtmlPage) {
			    $("html").empty();
    			$("html").append(completeHtmlPage);
    		}
	    }).done().fail(function(err){
	    	console.log(">ERROR: app.js, " + method +", " + url + "<");
	    	console.log(err);
	    });
	}

	$("#signup-btn").click(function () {
    	event.preventDefault();
		var nameInput = $("#LoginUser");
		var pwInput = $("#LoginPassword");
		var postReqData = {
			customer_name: nameInput.val().trim(),
			customer_pw: pwInput.val().trim()
		}
	    $("#data-panel").empty();
	    ajaxSA("POST", "/signup", postReqData, createResult);
	});

	function createResult(data) {
		if (data === "signup-success") {
		    $("#data-panel").html("<p style='color: red'>Thanks for siging up, please login.</p>");
		} else {
			$("#data-panel").html("<p style='color: red'>SIGN UP unsuccessful, please try again.</p>");
		}
	}

	function handleError() {
 	   console.log(arguments);
	}

	function ajaxSA(method, url, data, doneFx){
	    $.ajax({
	        method: method,
	        url: url,
	        data: data
	    }).done(doneFx).fail(function(err){
	    	console.log(">ERROR: app.js, " + method +", " + url + "<");
	    	console.log(err);
	    });
	}

});