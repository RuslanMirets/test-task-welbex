import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CityDto {
	@IsString({ message: 'Название должно быть строкой' })
	@IsNotEmpty({ message: 'Введите название' })
	title: string;

	@IsNumber(undefined, { message: 'Количество должно быть числом' })
	@IsNotEmpty({ message: 'Введите количество' })
	@IsInt({ message: 'Количество должно быть целым числом' })
	quantity: number;

	@IsNumber(undefined, { message: 'Расстояние должно быть числом' })
	@IsNotEmpty({ message: 'Введите расстояние' })
	distance: number;
}
