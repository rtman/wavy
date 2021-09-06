import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Artist } from '../../graphql/src/orm/models';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Artist)
      .values([
        {
          id: '0b600e0a-96d0-4ec0-bc94-2587a6b3507a',
          name: 'Various Artists',
          description: '',
          profileImageStoragePathLarge:
            'gs://wavy-development.appspot.com/andras.jpg',
          profileImageStoragePathSmall:
            'gs://wavy-development.appspot.com/andras-untitled.jpg',
          profileImageStoragePathThumb:
            'gs://wavy-development.appspot.com/andras-untitled.jpg',
          profileImageUrlLarge:
            'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/andras.jpg?alt=media&token=452f75aa-2329-4f08-9be1-cc7fbb2e17aa',
          profileImageUrlSmall:
            'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
          profileImageUrlThumb:
            'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
          createdAt: new Date(),
          updatedAt: new Date(),
          active: true,
          followers: 0,
        },
      ])
      .execute();
  }
}
