import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BHYT } from './bhyt.entity';

@Entity()
export class DanhMucKham {
  @PrimaryGeneratedColumn()
  idLoaiKham: number;

  @Column()
  TenLoaiKham: string;

  @Column()
  TenBHYT: string;

  @Column()
  NhomBHYT: string;

  @Column()
  GiaBaoHiem: number;

  @Column()
  Mota: string;

  @Column()
  LoiKhuyen: string;

  @Column()
  TenNhom: string;

  @Column()
  MaVietTat: string;

  @Column()
  NhomLoaiKham: string;

  @Column()
  XetNghiem: boolean;

  @Column()
  DieuTriTaiNha: boolean;

  @Column()
  TruongHopBHYT: string;

  @ManyToOne(() => BHYT, (baohiem) => baohiem.loaikham)
  baohiem: BHYT;
}
