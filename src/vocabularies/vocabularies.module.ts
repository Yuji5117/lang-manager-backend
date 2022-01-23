import { Vocabulary } from './vocabularies.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabulariesService } from './vocabularies.service';
import { VocabulariesController } from './vocabularies.controller';

@Module({
  // imports: [TypeOrmModule.forFeature([Vocabulary])],
  imports: [],
  providers: [VocabulariesService],
  controllers: [VocabulariesController],
})
export class VocabulariesModule {}
