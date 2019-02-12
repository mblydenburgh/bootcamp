DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top_songs(
	position INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(255) NOT NULL,
    song VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    raw_total FLOAT NOT NULL,
    raw_usa FLOAT NOT NULL,
    raw_uk FLOAT NOT NULL,
    raw_eur FLOAT NOT NULL,
    raw_row FLOAT NOT NULL
);

SELECT * FROM top_songs WHERE artist = 'The Beatles';

SELECT * FROM top_songs WHERE position= BETWEEN 10 AND 20;

