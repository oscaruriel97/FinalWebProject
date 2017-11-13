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
		$sql = "SELECT * 
				FROM products
				WHERE id = '$row[productid]";

		$result = $conn->query($sql);

		if($result->num_rows > 0)
		{
			while ($row = $result->fetch_assoc())
			{
				$response[] = array("productid"=>$row[id],
									"productname"=>$row[productname],
									"imagepath"=>$row[imagepath],
									"unitprice"=>$row[unitprice],
									"availability"=>$row[availability],
									"derscription"=>$row[derscription]);
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
