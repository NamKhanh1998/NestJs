import { PartialType } from '@nestjs/mapped-types';
import { CreateDanhMucKhamDto } from './create-danh-muc-kham.dto';

export class UpdateDanhMucKhamDto extends PartialType(CreateDanhMucKhamDto) {}
