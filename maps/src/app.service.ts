import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { timeout } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(@Inject("MAPS_SERVICE") private client: ClientProxy) {}

  getHello() {
    return this.client
      .send<string>("hello", 5)
      .pipe(timeout(5000));
  }
}
