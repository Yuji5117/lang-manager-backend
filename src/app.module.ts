import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabulariesModule } from './vocabularies/vocabularies.module';

@Module({
  imports: [TypeOrmModule.forRoot(), VocabulariesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
