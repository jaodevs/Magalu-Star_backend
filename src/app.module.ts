  import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import { SequelizeModule } from '@nestjs/sequelize';
  import { FakeStoreModule } from './fake-store/fake-store.module';



  @Module({
    imports: [
      ConfigModule.forRoot(), 
      SequelizeModule.forRoot({
        dialect: 'mysql', 
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        autoLoadModels: true, 
      }),
      FakeStoreModule,
    ],
  })
  export class AppModule {}
