import { Arg, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

@Resolver()
export class SearchResolvers {
  @Query(() => Models.Search)
  async searchAll(
    @Arg('query') query: string
  ): Promise<Models.Search | undefined> {
    try {
      const albumsPromise = getManager()
        .createQueryBuilder()
        .select('album')
        .from(Models.Album, 'album')
        .leftJoinAndSelect('album.artist', 'artist')
        .leftJoinAndSelect('album.label', 'label')
        .where(
          `to_tsvector('simple',album.title) @@ to_tsquery('simple', :query)`,
          { query: `${query}:*` }
        )
        .getMany();

      const artistsPromise = getManager()
        .createQueryBuilder()
        .select('artist')
        .from(Models.Artist, 'artist')
        .leftJoinAndSelect('artist.usersFollowing', 'usersFollowing')
        .leftJoinAndSelect('usersFollowing.user', 'user')
        .leftJoinAndSelect('artist.labels', 'labels')
        .leftJoinAndSelect('labels.label', 'label')
        .where(
          `to_tsvector('simple',artist.name) @@ to_tsquery('simple', :query)`,
          { query: `${query}:*` }
        )
        .getMany();

      const labelsPromise = getManager()
        .createQueryBuilder()
        .select('label')
        .from(Models.Label, 'label')
        .where(
          `to_tsvector('simple',label.name) @@ to_tsquery('simple', :query)`,
          { query: `${query}:*` }
        )
        .getMany();

      const playlistsPromise = getManager()
        .createQueryBuilder()
        .select('playlist')
        .from(Models.Playlist, 'playlist')
        .leftJoinAndSelect('playlist.users', 'users')
        .leftJoinAndSelect('users.user', 'user')
        .where(
          `to_tsvector('simple',playlist.title) @@ to_tsquery('simple', :query)`,
          { query: `${query}:*` }
        )
        .getMany();

      const songsPromise = getManager()
        .createQueryBuilder()
        .select('song')
        .from(Models.Song, 'song')
        .leftJoinAndSelect('song.artist', 'artist')
        .leftJoinAndSelect('song.album', 'album')
        .leftJoinAndSelect('song.supportingArtists', 'supportingArtists')
        .leftJoinAndSelect('supportingArtists.artist', 'supportingArtist')
        .leftJoinAndSelect('song.usersFavourited', 'usersFavourited')
        .leftJoinAndSelect('usersFavourited.user', 'user')
        .leftJoinAndSelect('song.label', 'label')
        .where(
          `to_tsvector('simple',song.title) @@ to_tsquery('simple', :query)`,
          { query: `${query}:*` }
        )
        .getMany();

      const results = await Promise.all([
        albumsPromise,
        artistsPromise,
        labelsPromise,
        playlistsPromise,
        songsPromise,
      ]);
      if (results) {
        const [albums, artists, labels, playlists, songs] = results;
        return {
          albums,
          artists,
          labels,
          playlists,
          songs,
        };
      }
      console.log('searchAll query failed - query', query);
      return;
    } catch (error) {
      console.log('searchAll error', error);
      return;
    }
  }
}
