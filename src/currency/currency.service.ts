import { Injectable } from '@nestjs/common';
import axios from 'axios';

const API_KEY = 'fca_live_bQO4tJ6VGoL1owUw9KOyMudmgAiw5ThRxU4tCYri';
const BASE_URL = 'https://api.freecurrencyapi.com/v1';



@Injectable()
export class CurrencyService {
  async getRates(base: string) {
    const res = await axios.get(`${BASE_URL}/latest`, {
      params: { apikey: API_KEY, base_currency: base },
    });
    return res.data;
  }

  async getHistorical(date: string, base: string) {
    const res = await axios.get(`${BASE_URL}/historical`, {
      params: { apikey: API_KEY, date, base_currency: base },
    });
    return res.data;
  }
}
