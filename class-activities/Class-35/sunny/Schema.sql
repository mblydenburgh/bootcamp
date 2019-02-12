DROP DATABASE IF EXISTS sunny_db;

CREATE DATABASE sunny_db;

USE sunny_db;

CREATE TABLE actors (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    coolness_points INTEGER,
    attitude VARCHAR(255)
);

INSERT INTO actors (name,coolness_points,attitude)
VALUES ("Dennis Reynols",10,"Better than you"), ("Mac MacDonald",7,"Tough"),("Charlie Kelly",8,"America"),("Dee Reynolds",5,"Bird"),("Frank Reynolds",9,"Bossy");