import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import config from './config';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAPS_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: config.REDIS_URL,
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
