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
		$currentProductId = $_POST["currentProductId"];
	
		$sql = "INSERT INTO Cart(productid)
				VALUES ('$currentProductId');";


		$result = $conn->query($sql);

		if($result === TRUE)
		{
			echo json_encode("Added to cart!");
		}
		else
		{
			header("HTTP/1.1 406 User not found.");
			die("Wrong credentials provided.");
		}
	}

	$conn->close();
?>
