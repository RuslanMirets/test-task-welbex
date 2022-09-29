import { CityDto } from './dto/city.dto';
import { CityEntity } from './entities/city.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
	constructor(
		@InjectRepository(CityEntity)
		private readonly cityRepository: Repository<CityEntity>,
	) {}

	async create(dto: CityDto) {
		return this.cityRepository.save(dto);
	}

	async findAll() {
		return this.cityRepository.find();
	}
}
