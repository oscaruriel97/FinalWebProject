<?php
	session_start();
	if (isset($_SESSION['name']) && 
		isset($_SESSION['username']) &&
		isset($_SESSION['email']) &&
		isset($_SESSION['address']) &&
		isset($_SESSION['postalcode']) &&
		isset($_SESSION['city']) &&
		isset($_SESSION['province']) &&
		isset($_SESSION['phone']) &&
		isset($_SESSION['usertype']))
	{
		echo json_encode(array(
			'name' => $_SESSION['name'],
			'username' => $_SESSION['username'],
			'email' => $_SESSION['email'], 
			'address' => $_SESSION['address'],
			'postalcode' => $_SESSION['postalcode'],
			'city' => $_SESSION['city'],
			'province' => $_SESSION['province'],
			'phone' => $_SESSION['phone'],
			'usertype' => $_SESSION['usertype'])); 	    
	}
	else
	{
		header('HTTP/1.1 406 Session not found yet.');
	    die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}
?>
