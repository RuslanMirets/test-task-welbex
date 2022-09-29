import { Base } from 'src/utils/base';
import { Column, Entity } from 'typeorm';

@Entity('City')
export class CityEntity extends Base {
	@Column()
	title: string;

	@Column()
	quantity: number;

	@Column({ type: 'float' })
	distance: number;
}
