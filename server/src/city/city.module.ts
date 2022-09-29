import { CityEntity } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';

@Module({
	providers: [CityService],
	controllers: [CityController],
	imports: [TypeOrmModule.forFeature([CityEntity])],
})
export class CityModule {}
