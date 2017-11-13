CREATE TABLE Users (
	name VARCHAR(30) NOT NULL,
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    address VARCHAR(50) NOT NULL,
    postalcode VARCHAR (15) NOT NULL,
    city VARCHAR(50) NOT NULL,
    province VARCHAR (15) NOT NULL,
    phone VARCHAR (15) NOT NULL,
    usertype VARCHAR(10) NOT NULL,
    password_register VARCHAR (15) NOT NULL
);

CREATE TABLE Products (
	productname VARCHAR(30) NOT NULL,
    id Int NOT NULL AUTO_INCREMENT,
    imagepath VARCHAR(50), 
    unitprice VARCHAR(30) NOT NULL,
    availability VARCHAR(30) NOT NULL,
    derscription VARCHAR (280) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Cart (
    productid Int NOT NULL,
    PRIMARY KEY (productid)
);

INSERT INTO Cart(productid)
VALUES ('1');

INSERT INTO Users(name, username, email, address, postalcode, city, province, phone, usertype, password_register)
VALUES  ('Alfredo', 'alfred90', 'alfredo21@hotmail.com', 'Col. 1, Calle 13, #123', '1234', 'Nuevo Leon', 'Monterrey', '1234512', 'Buyer', 'alfredo08'),
		('Oscar', 'oscaruriel97', 'oscaruriel_97@hotmail.com', 'Col. Primavera, Calle Azulada, #311', '38021', 'Nuevo Leon', 'Nonterrey', '81354212', 'Supplier', '123');

INSERT INTO Products(productname, imagepath, unitprice, availability, derscription)
VALUES  ('Dog Food', 'images/dogfood.png', '29.99', '10', 'The best food for your hairy friend.'),
        ('Bone', 'images/bone.png', '9.99', '50', 'A bone that dogs can play with.'),
        ('Ball', 'images/ball.png', '7.99', '20', 'A ball that dogs can play with.'),
        ('Pet Bed', 'images/petbed.png', '15.99', '7', 'A confortable bed for your best friend.'),
        ('Pet House', 'images/pethouse.png', '25.99', '5', 'A suit that your hairy frind deserves.'),
        ('Food Bowl', 'images/foodbowl.png', '9.99', '30', 'A plate for food or water for any type of pet.');
        ('Example', 'images/foodbowl.png', '100.99', '20', 'Somthing for the derscription.');
		