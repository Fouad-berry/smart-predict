import { Controller, Get, Query } from '@nestjs/common';
import { PredictionService } from './prediction.service';

@Controller('predict')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @Get()
  async predict(@Query('surface') surface: number) {
    return this.predictionService.getPrediction(surface);
  }
}
