DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(255),
    body VARCHAR(255),
    time_created TIME
  -- TABLE CODE TO GO HERE

);

INSERT INTO chirps(author,body,time_created)
VALUES ("me","ahhhhh!",'08:30:30')