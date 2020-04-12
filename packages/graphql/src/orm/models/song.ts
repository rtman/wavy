import { Artist } from './artist';
import { Album } from './album';
import { Playlist } from './playlist';
// import { SongPlaylist } from './songPlaylist';
// import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
// import { UserSongFavourites } from './userSongFavourites';
import { User } from './user';
// import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('song')
@ObjectType()
export class Song {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @ForeignKey(() => Artist)
  // @Column
  // artistId: string;
  @Field(() => Artist)
  @ManyToOne(
    () => Artist,
    (artist) => artist.songs
  )
  artist: Artist;

  // @ForeignKey(() => Album)
  // @Column
  // albumId: string;

  @Field(() => Album)
  @ManyToOne(
    () => Album,
    (album) => album.songs
  )
  album: Album;

  @Field(() => [Artist])
  @ManyToMany(
    () => Artist,
    (artist) => artist.supportingArtistOn
  )
  @JoinTable({
    name: 'songArtistSupportingArtist',
  })
  supportingArtists: Artist[];

  // TODO: Figureout genres, most likely a many to many assocation
  // @Column()
  // genres: string[];

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => Date)
  @Column()
  releaseDate: Date;

  @Field(() => [Playlist])
  @ManyToMany(
    () => Playlist,
    (playlist) => playlist.songs
  )
  @JoinTable({ name: 'songPlaylist' })
  playlists: Playlist[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => [User])
  @ManyToMany(
    () => User,
    (user) => user.favourites
  )
  @JoinTable({ name: 'userSongFavourites' })
  usersFavourited: User[];

  @Field(() => [Song])
  @ManyToMany(
    () => User,
    (user) => user.recentlyPlayed
  )
  @JoinTable({ name: 'userSongRecentlyPlayed' })
  usersRecentlyPlayed: Song[];
}
