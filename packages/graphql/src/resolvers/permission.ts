import { Model } from 'sequelize';
import {
  Arg,
  createUnionType,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

const PermissionEntityUnion = createUnionType({
  name: 'PermissionEntityUnion',
  types: () => [Models.Artist, Models.Label],
  resolveType: (value) => {
    switch (value.type) {
      case Models.UserSubscriptionEntity.ARTIST:
        return Models.Artist;
      case Models.UserSubscriptionEntity.LABEL:
        return Models.Label;
    }
  },
});
@ObjectType()
export class PermissionReturnType extends Models.Permission {
  @Field(() => PermissionEntityUnion)
  entity: typeof PermissionEntityUnion;
}

@ObjectType()
export class AllPermissionsReturnType {
  @Field(() => [PermissionReturnType])
  requestor: PermissionReturnType[];

  @Field(() => [PermissionReturnType])
  requestee: PermissionReturnType[];
}

@InputType()
class UpdatePermissionArgs implements Partial<Models.Permission> {
  @Field()
  requestorId: string;

  @Field()
  requesteeId: string;

  @Field({ nullable: true })
  createMusic?: boolean;

  @Field({ nullable: true })
  createSupportingArtist?: boolean;
}
@InputType()
class DeletePermissionArgs implements Partial<Models.Permission> {
  @Field()
  requestorId: string;

  @Field()
  requesteeId: string;
}

@Resolver(Models.Permission)
export class PermissionResolvers {
  @Query(() => AllPermissionsReturnType)
  async getPermissions(
    @Arg('id') id: string
  ): Promise<AllPermissionsReturnType | undefined> {
    try {
      const requestorPermissionsPromise = getManager()
        .getRepository(Models.Permission)
        .find({ where: { requestorId: id } });

      const requesteePermissionsPromise = getManager()
        .getRepository(Models.Permission)
        .find({ where: { requesteeId: id } });

      const ormResults = await Promise.all([
        requestorPermissionsPromise,
        requesteePermissionsPromise,
      ]);

      const [requestorPermissions, requesteePermissions] = ormResults;

      if (
        requestorPermissions.length === 0 &&
        requesteePermissions.length === 0
      ) {
        console.log('No Permissions found');

        return;
      }

      const artistRepository = getManager().getRepository(Models.Artist);
      const labelRepository = getManager().getRepository(Models.Label);

      let requestorResult: PermissionReturnType[] = [];
      let requesteeResult: PermissionReturnType[] = [];

      if (requestorPermissions.length > 0) {
        const entityPromises = requestorPermissions.map((permission) => {
          switch (permission.requesteeEntity) {
            case Models.PermissionEntityEnum.ARTIST:
              return artistRepository.findOne({
                where: { id: permission.requesteeId },
              });

            case Models.PermissionEntityEnum.LABEL:
              return labelRepository.findOne({
                where: { id: permission.requesteeId },
              });
          }
        });
        // Typescript doesnt like union types in promise arrays used in promise.all
        const requestorEntityResults = (await Promise.all(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entityPromises as any
        )) as Array<Models.Artist | Models.Label | undefined>;

        const resolvedRequestorEntityResult = requestorEntityResults.filter(
          (res) => res !== undefined
          // we removed undefined above, so this is ok. Typescript cant infer from filtering arrays
        ) as Array<Models.Artist | Models.Label>;

        requestorResult = requestorPermissions.map((permission, index) => ({
          entity: resolvedRequestorEntityResult[index],
          ...permission,
        }));

        requestorResult.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
      }

      if (requesteePermissions.length > 0) {
        const entityPromises = requesteePermissions.map((permission) => {
          switch (permission.requestorEntity) {
            case Models.PermissionEntityEnum.ARTIST:
              return artistRepository.findOne({
                where: { id: permission.requestorId },
              });

            case Models.PermissionEntityEnum.LABEL:
              return labelRepository.findOne({
                where: { id: permission.requestorId },
              });
          }
        });
        // Typescript doesnt like union types in promise arrays used in promise.all
        const requesteeEntityResults = (await Promise.all(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entityPromises as any
        )) as Array<Models.Artist | Models.Label | undefined>;

        const resolvedRequesteeEntityResult = requesteeEntityResults.filter(
          (res) => res !== undefined
          // we removed undefined above, so this is ok. Typescript cant infer from filtering arrays
        ) as Array<Models.Artist | Models.Label>;

        requesteeResult = requesteePermissions.map((permission, index) => ({
          entity: resolvedRequesteeEntityResult[index],
          ...permission,
        }));

        requesteeResult.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
      }

      return {
        requestor: requestorResult,
        requestee: requesteeResult,
      };
    } catch (error) {
      console.log('Find Permissions error', error);

      return;
    }
  }

  @Query(() => [Models.Permission])
  async getRequesteePermissions(
    @Arg('requesteeId') requesteeId: string
  ): Promise<Models.Permission[] | undefined> {
    try {
      const permissions = await getManager()
        .getRepository(Models.Permission)
        .find({ where: { requesteeId } });

      if (permissions) {
        return permissions;
      } else {
        console.log('No Permissions found');

        return;
      }
    } catch (error) {
      console.log('Find Permissions error', error);

      return;
    }
  }

  @Query(() => [Models.Permission])
  async getRequestorPermissions(
    @Arg('requestorId') requestorId: string
  ): Promise<Models.Permission[] | undefined> {
    try {
      const permissions = await getManager()
        .getRepository(Models.Permission)
        .find({ where: { requestorId } });

      if (permissions) {
        return permissions;
      } else {
        console.log('No Permissions found');

        return;
      }
    } catch (error) {
      console.log('Find Permissions error', error);

      return;
    }
  }

  @Mutation(() => Boolean)
  async createPermission(
    @Arg('input') payload: UpdatePermissionArgs
  ): Promise<boolean> {
    try {
      const permissionRepository = getManager().getRepository(
        Models.Permission
      );

      if (!payload.createMusic && !payload.createSupportingArtist) {
        console.log('CreatePermission submitted with no permissions', payload);
        return false;
      }

      const newPermission = permissionRepository.create(payload);

      if (newPermission) {
        await permissionRepository.save(newPermission);
        return true;
      }

      console.log('CreatePermission failed', payload);
      return false;
    } catch (error) {
      console.log('CreatePermission error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updatePermission(
    @Arg('input') payload: UpdatePermissionArgs
  ): Promise<boolean> {
    try {
      const permissionRepository = getManager().getRepository(
        Models.Permission
      );

      const { requesteeId, requestorId, ...rest } = payload;

      if (!rest.createMusic && !rest.createSupportingArtist) {
        console.log('UpdatePermission submitted with no permissions', payload);
        return false;
      }

      const permissionToUpdate = await permissionRepository.findOne({
        where: { requesteeId, requestorId },
      });

      if (permissionToUpdate) {
        await permissionRepository.update(permissionToUpdate.id, { ...rest });
        return true;
      }

      console.log('UpdatePermission failed', payload);
      return false;
    } catch (error) {
      console.log('UpdatePermission error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deletePermission(
    @Arg('input') payload: DeletePermissionArgs
  ): Promise<boolean> {
    try {
      const { requestorId, requesteeId } = payload;

      const permissionRepository = getManager().getRepository(
        Models.Permission
      );

      const permissionToDelete = await permissionRepository.findOne({
        where: { requesteeId, requestorId },
      });

      if (permissionToDelete) {
        await permissionRepository.delete(permissionToDelete?.id);
        return true;
      }

      console.log('DeletePermission failed', payload);
      return false;
    } catch (error) {
      console.log('DeletePermission error', error);
      return false;
    }
  }
}
