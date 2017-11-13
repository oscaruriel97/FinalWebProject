 
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

 	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});



});