import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
// import { User } from 'orm/models';
import { getManager } from 'typeorm';

@InputType({ description: 'Create a new user' })
class CreateUser implements Partial<Models.User> {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver(Models.User)
export class UserResolvers {
  @Query(() => Models.User)
  async userById(@Arg('id') id: string): Promise<Models.User | undefined> {
    const user = await getManager()
      .getRepository(Models.User)
      .findOne({
        where: { id: id },
        relations: ['favourites', 'following', 'recentlyPlayed', 'playlists'],
      });

    if (user === undefined) {
      console.log('User not found', id);
      return;
    }
    return user;
  }

  @Mutation()
  createUser(
    @Arg('data') newUserData: CreateUser
    // @Ctx() ctx: Context
  ): Models.User {
    // sample implementation
    const repository = getManager().getRepository(Models.User);
    const user = repository.create(newUserData);

    if (user) {
      repository.save(user);
      return user;
    }

    console.log('CreateUser failed', newUserData);
    return user;
  }
  // @Mutation(() => Models.User)
  // async createUser(@Arg('id') id: string, @Arg('id') id: string): Promise<Models.User | undefined> {
  //   const user = await getManager()
  //     .createQueryBuilder(Models.User, 'user')
  //     .leftJoinAndSelect('user.favourites', 'artist')
  //     .where('user.id = :id', { id: id })
  //     .getOne();

  //   if (user === undefined) {
  //     console.log('User not found', id);
  //     return;
  //   }
  //   return user;
  // }
  // async updateFollowing(@Arg('id') id: string, @Arg('artistId') artistId: string): Promise<Boolean> {
  //     const following = await getManager()
  //     .getRepository(Models.User)
  //     .find({relations: })
  //     .where()
  //     .createQueryBuilder(Models.UserArtistFollowing, 'userArtistFollowing')
  //       where: {
  //         userId: id,
  //         artistId,
  //       },
  //     });
  //     if (following) {
  //       await following.destroy();
  //     } else {
  //       await ctx.models.UserArtistFollowing.create({ userId: id, artistId });
  //     }
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // },
  // updateFavourites: async (
  //   _parent,
  //   args,
  //   ctx
  // ): Promise<Scalars['Boolean']> => {
  //   try {
  //     const { id, songId } = args;
  //     const favourite = await ctx.models.UserSongFavourites.findOne({
  //       where: {
  //         userId: id,
  //         songId,
  //       },
  //     });
  //     if (favourite) {
  //       await favourite.destroy();
  //     } else {
  //       await ctx.models.UserSongFavourites.create({ userId: id, songId });
  //     }
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // },
  // updatePlaylists: async (
  //   _parent,
  //   args,
  //   ctx
  // ): Promise<Scalars['Boolean']> => {
  //   try {
  //     const { id, playlistId } = args;
  //     const playlist = await ctx.models.UserPlaylist.findOne({
  //       where: {
  //         userId: id,
  //         playlistId,
  //       },
  //     });
  //     if (playlist) {
  //       await playlist.destroy();
  //     } else {
  //       await ctx.models.UserPlaylist.create({ userId: id, playlistId });
  //     }
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // },
  // updateRecentlyPlayed: async (
  //   _parent,
  //   args,
  //   ctx
  // ): Promise<Scalars['Boolean']> => {
  //   try {
  //     const { id, songId } = args;
  //     const song = await ctx.models.UserSongRecentlyPlayed.findOne({
  //       where: {
  //         userId: id,
  //         songId,
  //       },
  //     });
  //     if (song) {
  //       await song.destroy();
  //     } else {
  //       await ctx.models.UserSongRecentlyPlayed.create({
  //         userId: id,
  //         songId,
  //       });
  //     }
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // },
  // deleteUser: async (_parent, args, ctx): Promise<Scalars['Int']> => {
  //   const { id } = args;
  //   return await ctx.models.User.destroy({
  //     where: { id },
  //   });
  // },
}
