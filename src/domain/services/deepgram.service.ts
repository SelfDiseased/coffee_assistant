import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import configuration from '@config/configuration';

const config = configuration();

@Injectable()
export class DeepgramService {
  constructor(private readonly httpService: HttpService) {}

  async getAllWords(): Promise<string[]> {
    const {
      data: {
        results: { channels },
      },
    } = await lastValueFrom(
      this.httpService.post(
        'https://api.deepgram.com/v1/listen',
        {
          url: config.audioUrl,
        },
        {
          headers: {
            contentType: 'application/json',
            Authorization: `Token ${config.deepgramApiKey}`,
          },
        },
      ),
    );

    const words = channels[0].alternatives[0].words.map((obj) => obj.word);

    console.log(words);

    return words;
  }
}
