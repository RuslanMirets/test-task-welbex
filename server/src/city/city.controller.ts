import { CityDto } from './dto/city.dto';
import { CityService } from './city.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('city')
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@Post()
	create(@Body() dto: CityDto) {
		return this.cityService.create(dto);
	}

	@Get()
	findAll() {
		return this.cityService.findAll();
	}
}
