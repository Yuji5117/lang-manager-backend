import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { Vocabulary } from './vocabularies.entity';

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private vocabulariesService: VocabulariesService) {}

  @Get()
  findAll(): Promise<Vocabulary[]> {
    return this.vocabulariesService.findAll();
  }

  @Post()
  async add(
    @Body() vocabulary: { word: string; translatedWord: string; image: string },
  ): Promise<void> {
    await this.vocabulariesService.add(vocabulary);
  }

  @Put(`:id`)
  async update(@Param() id, @Body() vocabulary): Promise<void> {
    await this.vocabulariesService.update(id, vocabulary);
  }

  @Delete(`:id`)
  async delete(@Param() id): Promise<void> {
    await this.vocabulariesService.delete(id);
  }
}
