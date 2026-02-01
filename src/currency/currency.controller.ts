import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('latest')
  getLatest(@Query('base') base: string) {
    return this.currencyService.getRates(base);
  }

  @Get('historical')
  getHistorical(@Query('date') date: string, @Query('base') base: string) {
    return this.currencyService.getHistorical(date, base);
  }
}
