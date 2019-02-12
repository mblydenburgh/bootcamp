DROP DATABASE IF EXISTS wish_db;

CREATE DATABASE wish_db;

USE wish_db;

CREATE TABLE wishlist (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    wish VARCHAR(255)
);

INSERT INTO wishlist (wish)
VALUES ("Learn handlebars"),("Make Page"), ("???"), ("Profit");