<?php
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "nekok2inoDB";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if($conn->connect_error)
	{
		header("HTTP/1.1 500 Bad Connection, portal down.");
		die("The server is down, we couldn't stablish the data base connection.");
	}
	else
	{

		$name = $_POST["name"];
		$username = $_POST["username"];
		$email = $_POST["email"];
		$address = $_POST["address"];
		$postalcode = $_POST["postalcode"];
		$city = $_POST["city"];
		$province = $_POST["province"];
		$phone = $_POST["phone"];
		$password_register = $_POST["password_register"];
		
		

		$sql = "INSERT INTO Users(name, username, email, address, postalcode, city, province, phone, usertype, password_register) VALUES ('$name', '$username', '$email', '$address', '$postalcode', '$city', '$province', '$phone', 'Buyer', '$password_register')";

		$result = $conn->query($sql);

		if($result === TRUE)
		{
			session_start();
				if (! isset($_SESSION['name']))
				{
					$_SESSION['name'] = $name;
				}
				if (! isset($_SESSION['username']))
				{
					$_SESSION['username'] = $username;
				}
				if (! isset($_SESSION['email']))
				{
				 	$_SESSION['email'] = $email;
				}
				if (! isset($_SESSION['address']))
				{
				 	$_SESSION['address'] = $address;
				}
				if (! isset($_SESSION['postalcode']))
				{
				 	$_SESSION['postalcode'] = $postalcode;
				}
				if (! isset($_SESSION['city']))
				{
				 	$_SESSION['city'] = $city;
				}
				if (! isset($_SESSION['province']))
				{
				 	$_SESSION['province'] = $province;
				}
				if (! isset($_SESSION['phone']))
				{
				 	$_SESSION['phone'] = $phone;
				}
				if (! isset($_SESSION['usertype']))
				{
				 	$_SESSION['usertype'] = "Buyer";
				}
			echo json_encode("Connection");
		}
		else
		{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	$conn->close();
?>
