import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

@ObjectType()
export class AllPermissionsReturnType {
  @Field()
  requestor: Models.Permission[];

  @Field()
  requestee: Models.Permission[];
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

  @Query(() => AllPermissionsReturnType)
  async getAllPermissions(
    @Arg('id') id: string
  ): Promise<AllPermissionsReturnType | undefined> {
    try {
      const requestor = await getManager()
        .getRepository(Models.Permission)
        .find({ where: { requestorId: id } });

      const requestee = await getManager()
        .getRepository(Models.Permission)
        .find({ where: { requesteeId: id } });

      if (requestor && requestee) {
        return { requestor, requestee };
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
