SELECT "User"."user_id", "User"."user_firstName", "User"."user_lastName", "User"."user_email", "User"."user_password", "User"."user_favourites", "User"."user_following", "User"."user_recentlyPlayed", "User"."user_createdAt", "User"."user_updatedAt", "playlists"."playlist_id" AS "playlists.playlist_id", "playlists"."playlist_title" AS "playlists.playlist_title", "playlists"."playlist_description" AS "playlists.playlist_description", "playlists"."playlist_image" AS "playlists.playlist_image", "playlists"."playlist_songs" AS "playlists.playlist_songs", "playlists"."playlist_createdAt" AS "playlists.playlist_createdAt", "playlists"."playlist_updatedAt" AS "playlists.playlist_updatedAt", "playlists->UserPlaylist"."user_id" AS "playlists.UserPlaylist.user_id", "playlists->UserPlaylist"."playlist_id" AS "playlists.UserPlaylist.playlist_id", "playlists->UserPlaylist"."createdAt" AS "playlists.UserPlaylist.createdAt", "playlists->UserPlaylist"."updatedAt" AS "playlists.UserPlaylist.updatedAt" FROM "users" AS "User" INNER JOIN ( "user_playlist" AS "playlists->UserPlaylist" INNER JOIN "playlists" AS "playlists" ON "playlists"."playlist_id" = "playlists->UserPlaylist"."playlist_id") ON "User"."user_id" = "playlists->UserPlaylist"."user_id" AND "playlists"."user_id" = 'H2qAdR0c81c3xGFk5PmgDXKAjis1' WHERE "User"."user_id" = 'H2qAdR0c81c3xGFk5PmgDXKAjis1';