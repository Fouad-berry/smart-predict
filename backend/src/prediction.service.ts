import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PredictionService {
  constructor(private http: HttpService) {}

  async getPrediction(surface: number) {
    const res = await this.http
      .get(`http://ml-service:8000/predict?surface=${surface}`)
      .toPromise();
    return res.data;
  }
}
