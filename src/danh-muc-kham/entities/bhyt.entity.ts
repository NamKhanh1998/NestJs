import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DanhMucKham } from './danh-muc-kham.entity';

@Entity()
export class BHYT {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TenBH: string;

  @Column()
  PhanTramChiTra: number;

  @OneToMany(() => DanhMucKham, (loaikham) => loaikham.baohiem)
  loaikham: DanhMucKham;
}
