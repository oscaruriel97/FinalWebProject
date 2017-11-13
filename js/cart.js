 
 $(document).ready(function(){

 	$.ajax({
		    url: "./data/loadCart.php",
		    type : "POST",
			dataType : "json",

		    error : function(errorMessage, obj1, obj2) {
				alert("Error Loading Cart!");
			},

		    success: function (dataReceived) {
		    	var jsonToSend;
		    	
		    	for(var x = 0; x < dataReceived.length; x++){
		    		var jsonToSend += {
								"productid" : dataReceived.productid
							 };
		    	}

		    	$.ajax({
					url : "./data/loadCart2.php",
					type : "POST",
					data : dataReceived,
					ContentType : "application/json",
					dataType : "json",

					success : function(dataReceived2) 
					{
						alert("Recived!");
					},
					error : function(errorMessage)
					{
						alert("Error en php!");
					}
				});
		    }
		});

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

 	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});
});