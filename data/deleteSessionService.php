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

		unset($_SESSION['name']);
		unset($_SESSION['username']);
		unset($_SESSION['email']);
		unset($_SESSION['address']);
		unset($_SESSION['postalcode']);
		unset($_SESSION['city']);
		unset($_SESSION['province']);
		unset($_SESSION['phone']);
		unset($_SESSION['usertype']);

		session_destroy();
		echo json_encode(array('success' => 'Session is deleted'));   	    
	}
	else
	{
		header('HTTP/1.1 406 Session not found yet.');
	    die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}
?>
