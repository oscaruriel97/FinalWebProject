 
 $(document).ready(function(){
 	$("#myProfile_button").on("click", function(){
 		
	 		$.ajax({
		    url: "./data/sessionService.php",
		    type : "POST",
			dataType : "json",

		    error : function(errorMessage, obj1, obj2) {
				window.location.replace("loginAndRegister.html");
			},

		    success: function (dataReceived) {
		    	var userType = dataReceived.usertype;
		    	if(userType == "Buyer"){
		    		window.location.replace("myProfileBuyer.html");
		    	}
		    	else if (userType == "Supplier") {
					window.location.replace("myProfileSupplier.html");
		    	}
		    	else{
		    		alert("Error capturing userType!")
		    	}

		        console.log('Session Check successfully!.');
		    }
		});
 	});

 	$("#catalog").on("click", function(){
 		window.location.replace("home.html");
 	});

 	$("#LogOut").on("click", function(){
 		$.ajax({
			url : "./data/deleteSessionService.php",
			type : "POST",
			dataType : "json",
			success : function(dataReceived){
				alert(dataReceived.success);
				window.location.replace("home.html");
			},
			error : function(errorMessage){
				alert(errorMessage.statusText);
			}

		});
 	});

 	$.ajax({
	    url: "./data/sessionService.php",
	    type : "POST",
		dataType : "json",

	    error : function(errorMessage) {
			alert("No session detected!");
			window.location.replace("home.html");
		},

	    success: function (dataReceived) {
	    	var newHTML = "";

			newHTML += "<div> - <b>Name:</b>" + dataReceived.name + "</div>";
			newHTML += "<div> - <b>Username:</b>" + dataReceived.username + "</div>";
			newHTML += "<div> - <b>Email:</b>" + dataReceived.email + "</div>";
			newHTML += "<div> - <b>Address:</b>" + dataReceived.address + "</div>";
			newHTML += "<div> - <b>Postal Code:</b>" + dataReceived.postalcode + "</div>";
			newHTML += "<div> - <b>City:</b>" + dataReceived.city + "</div>";
			newHTML += "<div> - <b>Province:</b>" + dataReceived.province + "</div>";
			newHTML += "<div> - <b>Phone:</b>" + dataReceived.phone + "</div>";
			


			$("#userinfo").append(newHTML);
	        console.log('Retriving User data successfully.');
	    }
	});
	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});
});