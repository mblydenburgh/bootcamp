-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Create a string column called "language" --
	`language` VARCHAR(255),
  -- Create an integer column called "rating" --
	rating INTEGER,
  -- Create a boolean column called "mastered" which will automatically fill --
	mastered BOOLEAN DEFAULT TRUE
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
);

-- Create new example rows
INSERT INTO programming_languages(language,rating,mastered)
VALUES ('Javascript',8,false),('Python',9,false);

SELECT * FROM programming_languages;


