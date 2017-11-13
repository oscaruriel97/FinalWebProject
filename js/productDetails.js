 
 $(document).ready(function(){

 	var currentProductId = localStorage.getItem("currentItemId");

 	var jsonToSend = {		
 							"currentProductId" : currentProductId
					 };

 	$.ajax({
 		url: "./data/loadProductDetails.php",
 		type: "POST",
 		data : jsonToSend,
		ContentType : "application/json",
 		datatype: "json",

 		error : function(errorMessage){
 			alert("Error loading Products Details!")
 		},
 		success : function(dataReceived){
 			var productid = dataReceived.productid;
	 		var productname = dataReceived.productname;
	 		var imagepath = dataReceived.imagepath;
	 		var unitprice = dataReceived.unitprice;
	 		var availability = dataReceived.availability;
	 		var derscription = dataReceived.derscription;

	 		var newHTML = "";

	 		newHTML = "<img id='product_image' src='" + imagepath + "'>";
	 		$("#left_details").append(newHTML);

	 		newHTML = "<p id='product_name'> " + productname + "</p>";
			newHTML	+= "<p id='product_price'>" + unitprice + "</p>";
			newHTML += "<p id='product_ammount'>" + availability + " in storage </p>";

	 		$("#center-details").append(newHTML);

	 		newHTML = "<p id='des'>Description:</p>" + "<p id='product_description'>"+ derscription +"</p>"
	 		$("#down_details").append(newHTML);

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

 	$("#buy_button").on("click", function(){
 		$.ajax({
		    url: "./data/addCartService.php",
		    type : "POST",
		    data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",

		    error : function(errorMessage, obj1, obj2) {
				alert("You can not add more of that product to the cart!");
			},

		    success: function (dataReceived) {
		    	window.location.replace("home.html");
		    }
		});
 	});

 	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});



});