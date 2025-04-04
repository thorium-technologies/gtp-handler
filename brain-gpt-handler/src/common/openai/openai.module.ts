// src/common/openai/openai.module.ts
import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Module({
  providers: [OpenAiService],
  exports: [OpenAiService],
})
export class OpenAiModule {}
