import { Module } from '@nestjs/common';
import { DanhMucKhamService } from './danh-muc-kham.service';
import { DanhMucKhamController } from './danh-muc-kham.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanhMucKham } from './entities/danh-muc-kham.entity';
import { BHYT } from './entities/bhyt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DanhMucKham, BHYT])],
  controllers: [DanhMucKhamController],
  providers: [DanhMucKhamService],
})
export class DanhMucKhamModule {}
