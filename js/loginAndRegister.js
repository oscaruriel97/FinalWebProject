$(document).ready(function(){

	$("#catalog").on("click", function(){
 		window.location.replace("home.html");
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
 	
 	$("#login").on("click", function(){

		if ($("#username_login").val() == "" ) {

			if( $("#password_login").val() == "" ){

				alert("You need to fill the username and password!");
			}
			else{
				alert("You need to fill username!");
			}

		}
		else{
			if( $("#password_login").val() == "" ){

				alert("You need to fill the password!");
			}
			else{
				var usernamelogin = $("#username_login").val();
				var passwordlogin = $("#password_login").val();

				var jsonToSend = {
								"username" : usernamelogin,
								"passwordlogin" : passwordlogin
							 };

				$.ajax({
					url : "./data/loginService.php",
					type : "POST",
					data : jsonToSend,
					ContentType : "application/json",
					dataType : "json",

					success : function(dataReceived) 
					{
						alert("Welcome back " + dataReceived.name + " .");
						window.location.href = "home.html";
					},
					error : function(errorMessage)
					{
						alert("Username or password are incorrect!");
					}
				});


			}

		}
	});

	$("#register").on("click", function(){

		var name = $("#name").val();
		var username = $("#username_register").val();
		var email = $("#email").val();		
		var address = $("#address").val();
		var postalcode = $("#postalcode").val();
		var city = $("#city").val();
		var province = $("#province").val();
		var phone = $("#phone").val();
		var password_register = $("#password_register").val();

		MissingInfo = false;
		validateInput($("#name"), $("#MInfoName"));
		validateInput($("#username_register"), $("#MInfoUsername"));
		validateInput($("#email"), $("#MInfoEmail"));
		validateInput($("#address"), $("#MInfoAddress"));
		validateInput($("#postalcode"), $("#MInfoPostalCode"));
		validateInput($("#city"), $("#MInfoCity"));
		validateInput($("#province"), $("#MInfoProvince"));
		validateInput($("#phone"), $("#MInfoPhone"));
		validateInput($("#password_register"), $("#MInfoPassword"));

		validatePasswordInputs($("#password_register"), $("#confirmpassword_register"), $("#MInfoConfirmPassword"));

		if (!MissingInfo) {
			var jsonToSend = {
								"name" : name,
								"username" : username,
								"email" : email,
								"address" : address,
								"postalcode": postalcode,
								"city": city,
								"province" : province,
								"phone": phone,
								"password_register": password_register
							 };

			$.ajax({
				url : "./data/registerService.php",
				type : "POST",
				data : jsonToSend,
				ContentType : "application/json",
				dataType : "json",

				success : function(dataReceived)
				{
					alert("User registered " + name);
					window.location.href = "home.html";
					

				},
				error : function(errorMessage)
				{
					alert("Username already Used!");
					console.log("SQL Error!");
				}
			});
		}

	});

	$("#cart_button").on("click", function(){		
 		window.location.replace("cart.html");
 	});
});

function validateInput($elementToValidate, $errorElement)
{
	if ($elementToValidate.val() == "")
	{
		$errorElement.text("<- Please fill up this input.");
		MissingInfo = true;
	}
	else
	{
		$errorElement.text("");
	}
}
function validatePasswordInputs($inputOne, $inputTwo, $errorElement)
{
	if ($inputTwo.val() == "")
	{
		$errorElement.text("<- Please fill up this input.");
		MissingInfo = true;
		return;
	}
	else
	{
		if ($inputOne.val() != $inputTwo.val())
		{
			$errorElement.text("Passwords do not match.");
			MissingInfo = true;
		}
		else
		{
			$errorElement.text("");
		}
	}
}