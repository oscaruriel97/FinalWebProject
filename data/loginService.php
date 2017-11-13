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
		$uName = $_POST["username"];
		$uPassword = $_POST["passwordlogin"];

		$sql = "SELECT * 
		FROM users 
		WHERE username = '$uName' 
		AND password_register ='$uPassword'";

		$result = $conn->query($sql);

		if($result->num_rows > 0)
		{
			while ($row = $result->fetch_assoc())
			{
				$response = array("name"=>$row[name],
								  "username"=>$row[username]);

				session_start();
				if (! isset($_SESSION['name']))
				{
					$_SESSION['name'] = $row['name'];
				}
				if (! isset($_SESSION['username']))
				{
					$_SESSION['username'] = $row['username'];
				}
				if (! isset($_SESSION['email']))
				{
				 	$_SESSION['email'] = $row['email'];
				}
				if (! isset($_SESSION['address']))
				{
				 	$_SESSION['address'] = $row['address'];
				}
				if (! isset($_SESSION['postalcode']))
				{
				 	$_SESSION['postalcode'] = $row['postalcode'];
				}
				if (! isset($_SESSION['city']))
				{
				 	$_SESSION['city'] = $row['city'];
				}
				if (! isset($_SESSION['province']))
				{
				 	$_SESSION['province'] = $row['province'];
				}
				if (! isset($_SESSION['phone']))
				{
				 	$_SESSION['phone'] = $row['phone'];
				}
				if (! isset($_SESSION['usertype']))
				{
				 	$_SESSION['usertype'] = $row['usertype'];
				}
			}
			echo json_encode($response);
		}
		else
		{
			header("HTTP/1.1 406 User not found.");
			die("Wrong credentials provided.");
		}
	}

	$conn->close();
?>
