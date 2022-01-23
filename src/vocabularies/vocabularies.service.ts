import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocabulary } from './vocabularies.entity';

@Injectable()
export class VocabulariesService {
  // constructor(
  //   @InjectRepository(Vocabulary)
  //   private vocabulariesRepository: Repository<Vocabulary>,
  // ) {}

  // findAll(): Vocabulary[] {
  findAll() {
    // return this.vocabulariesRepository.find();
    return [
      { id: 1, word: 'English', translatedWord: '英語', image: 'test.jpg' },
    ];
  }
}
