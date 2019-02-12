USE top_songsDB;

CREATE TABLE top_albums(
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

SELECT * FROM top_albums INNER JOIN top_songs ON top_albums.artist = top_songs.artist AND top_albums.year = top_songs.release_year;