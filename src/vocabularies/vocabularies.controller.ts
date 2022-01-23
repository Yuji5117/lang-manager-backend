import { Controller, Get } from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { Vocabulary } from './vocabularies.entity';

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private vocabulariesService: VocabulariesService) {}

  @Get()
  findAll(): Promise<Vocabulary[]> {
    return this.vocabulariesService.findAll();
  }
}
