import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly filePath: string;
  constructor(private readonly appService: AppService) {
    this.filePath = process.env.JSON_FILE_PATH || './cities.json';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('data')
  getData() {
    const jsonData = this.appService.readJsonFile(this.filePath);
    return jsonData;
  }
  @Get('search/:cityName')
  searchCity(@Param('cityName') cityName: string) {
    const jsonData = this.appService.readJsonFile(this.filePath);
    
    if (!jsonData) {
      throw new NotFoundException('JSON data not available.');
    }

    const city = jsonData.find((city) => city.cityName.toLowerCase() == cityName.toLowerCase());

    if (!city) {
      throw new NotFoundException('City not found.');
    }

    return city;
  }
}
