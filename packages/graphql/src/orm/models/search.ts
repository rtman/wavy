import { Field, ObjectType } from 'type-graphql';

import { Album } from './album';
import { Artist } from './artist';
import { Label } from './label';
import { Playlist } from './playlist';
import { Song } from './song';

@ObjectType()
export class Search {
  @Field(() => [Album])
  albums: Album[];

  @Field(() => [Artist])
  artists: Artist[];

  @Field(() => [Label])
  labels: Label[];

  @Field(() => [Playlist])
  playlists: Playlist[];

  @Field(() => [Song])
  songs: Song[];
}
