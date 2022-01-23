import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocabulary } from './vocabularies.entity';

@Injectable()
export class VocabulariesService {
  constructor(
    @InjectRepository(Vocabulary)
    private vocabulariesRepository: Repository<Vocabulary>,
  ) {}

  findAll(): Promise<Vocabulary[]> {
    return this.vocabulariesRepository.find();
  }

  async add(params): Promise<void> {
    await this.vocabulariesRepository.insert(params);
  }

  async update(id, vocabulary): Promise<void> {
    await this.vocabulariesRepository.update(id, vocabulary);
  }

  async delete(id): Promise<void> {
    await this.vocabulariesRepository.delete(id);
  }
}
