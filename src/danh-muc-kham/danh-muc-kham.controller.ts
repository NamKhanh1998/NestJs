import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DanhMucKhamService } from './danh-muc-kham.service';
import { CreateDanhMucKhamDto } from './dto/create-danh-muc-kham.dto';
import { UpdateDanhMucKhamDto } from './dto/update-danh-muc-kham.dto';

@Controller('dmkham')
export class DanhMucKhamController {
  constructor(private readonly danhMucKhamService: DanhMucKhamService) {}

  @Post()
  create(@Body() createDanhMucKhamDto: CreateDanhMucKhamDto) {
    return this.danhMucKhamService.create(createDanhMucKhamDto);
  }

  @Get()
  findAll() {
    return this.danhMucKhamService.findTitle();
  }

  @Get(':id')
  findone(@Param('id', ParseIntPipe) id: number) {
    return this.danhMucKhamService.findone(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDanhMucKhamDto: UpdateDanhMucKhamDto,
  ) {
    return this.danhMucKhamService.update(+id, updateDanhMucKhamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.danhMucKhamService.remove(+id);
  }
}
