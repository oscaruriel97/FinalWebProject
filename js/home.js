 
 $(document).ready(function(){

 	$.ajax({
 		url: "./data/loadCatalog.php",
 		type: "POST",
 		dataType: "json",
 		error : function(errorMessage){
 			alert("Error loading catalog!");
 		},
 		success: function(dataReceived){

 			var counter = 2;
 			$("#tableCatalog").append("<tr>");
 			for(var x = 0; x < dataReceived.length; x++){

 				var productid = dataReceived[x].productid;
	 			var productname = dataReceived[x].productname;
	 			var imagepath = dataReceived[x].imagepath;
	 			var unitprice = dataReceived[x].unitprice;
	 			var availability = dataReceived[x].availability;
	 			var derscription = dataReceived[x].derscription;

 				var newHTML = "";

 				newHTML += "<td><div id = '" + productid + "' class='product_name'>" +  productname + "</div><img src='" + imagepath +"''><div class='product_price'>" + unitprice + "</div></td>";

 				$("#tableCatalog").append(newHTML);

 				if ((x + 1) % 3 == 0) {
 					$("#tableCatalog").append("</tr>");
 					$("#tableCatalog").append("<tr>");	  				
 				}
 			}
 			$("#tableCatalog").append("</tr>");

 			
 		}
 	});

 	$("#tableCatalog").on("click", "td", function(){
 		var id = $(this).children().attr('id');
 		localStorage.setItem("currentItemId", id);

 		window.location.replace("productDetails.html");
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

 	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});


});