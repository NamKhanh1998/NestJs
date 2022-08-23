import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDanhMucKhamDto } from './dto/create-danh-muc-kham.dto';
import { UpdateDanhMucKhamDto } from './dto/update-danh-muc-kham.dto';
import { DanhMucKham } from './entities/danh-muc-kham.entity';

@Injectable()
export class DanhMucKhamService {
  constructor(
    @InjectRepository(DanhMucKham) private DMKhamRepo: Repository<DanhMucKham>,
  ) {}

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async create(createDanhMucKhamDto: CreateDanhMucKhamDto) {
    const dmkham = this.DMKhamRepo.create(createDanhMucKhamDto);
    return await this.DMKhamRepo.save(dmkham);
  }

  async findAll() {
    return await this.DMKhamRepo.find();
  }

  async findTitle() {
    return await this.DMKhamRepo.createQueryBuilder('dmkham')
      .select([
        'dmkham.TenLoaiKham',
        'dmkham.TenBHYT',
        'dmkham.NhomBHYT',
        'dmkham.TenNhom',
        'dmkham.idLoaiKham',
      ])
      .getMany();
  }

  async findone(id: number) {
    // await this.timeout(3000);
    return await this.DMKhamRepo.createQueryBuilder('dmkham')
      .where('dmkham.idLoaiKham = :id', { id: id })
      .getOne();
  }

  async findAllChiTiet() {
    return await this.DMKhamRepo.createQueryBuilder('dmkham')
      .leftJoinAndSelect('dmkham.baohiem', 'baohiem')
      .getMany();
  }

  async update(id: number, updateDanhMucKhamDto: UpdateDanhMucKhamDto) {
    console.log(updateDanhMucKhamDto);

    return await this.DMKhamRepo.createQueryBuilder('dmkham')
      .update()
      .set(updateDanhMucKhamDto)
      .where('idLoaiKham = :id', { id })
      .execute();
  }

  remove(id: number) {
    return this.DMKhamRepo.createQueryBuilder('dmkham')
      .delete()
      .where('idLoaiKham = :id', { id })
      .execute();
  }
}
