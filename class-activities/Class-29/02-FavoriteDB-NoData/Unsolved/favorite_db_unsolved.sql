-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
use favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods5 (
  food varchar(255) not null,
  score integer(10)
);

CREATE TABLE favorite_songs5 (
  song varchar(255) not null,
  artist varchar(255),
  score INTEGER(10)
);

CREATE TABLE favorite_movies5 (
  id integer not null auto_increment,
  movie varchar(255) not null,
  five_times boolean default false,
  score integer(10),
  primary key(id)
);
