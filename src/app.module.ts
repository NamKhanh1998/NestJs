import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DanhMucKhamModule } from './danh-muc-kham/danh-muc-kham.module';
import { BHYT } from './danh-muc-kham/entities/bhyt.entity';
import { DanhMucKham } from './danh-muc-kham/entities/danh-muc-kham.entity';
import { CustomerModule } from './customer/customer.module';
import { Customers } from './customer/entities/customer.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    DanhMucKhamModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Khanh123@',
      database: 'test',
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
    TypeOrmModule.forFeature([]),
    CustomerModule,
    UserModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
