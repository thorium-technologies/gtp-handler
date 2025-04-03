import { Injectable } from '@nestjs/common';
import { AIChatCompletionFullResponse } from '../../common/openai/interfaces/chat-completion-full-response.interface';
import { CompactObjectResponse } from '../interfaces/compact-object-response.interface';

/**
 * Transforms the AI response into a structured code snippet
 * for obtaining a compact object in the requested language.
 */
@Injectable()
export class CompactObjectHandler {
  transformResponse(aiResponse: AIChatCompletionFullResponse): CompactObjectResponse {
    const [firstChoice] = aiResponse.choices;

    return {
      codeSnippet: firstChoice?.message?.content ?? '',
    };
  }
}
