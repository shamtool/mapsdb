import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class AppService {
	constructor(
		@Inject('MAPS_SERVICE') private client: ClientProxy,
	) { }

	async getHello() {
		return await firstValueFrom(
			this.client
				.send<string>("hello", 5)
				.pipe(timeout(5000))
		);
	}
}
