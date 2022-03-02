import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { appConfig } from "./config";
import { WysiwygNamingStrategy } from "./maps-naming.strategy";
import { entities as mapsFeatures } from "./maps.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: appConfig.rdbHost,
      port: appConfig.rdbPort,
      username: appConfig.rdbUser,
      password: appConfig.rdbPass,
      database: "mapsdb",
      name: "mapsdbConn",
      namingStrategy: new WysiwygNamingStrategy(),
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature(mapsFeatures),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
