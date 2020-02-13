CREATE TYPE songs_idx_type AS (id int, artist_id int, title varchar, album varchar, genre varchar, url varchar, artwork varchar, duration int, artist jsonb);

CREATE FUNCTION songs_with_artist(songs) RETURNS songs_idx_type IMMUTABLE STRICT LANGUAGE SQL AS $$
	SELECT ROW($1.id, $1.artist_id, $1.title, $1.album, $1.genre, $1.url, $1.artwork, $1.duration, (SELECT row_to_json(m) FROM artists m WHERE m.id = $1.artist_id))::songs_idx_type;
$$;

CREATE INDEX idxSongs ON songs USING zombodb (songs_with_artist(songs.*)) WITH (url="es01:9200/");