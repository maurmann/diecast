import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelBrandModule } from './modelBrand/modelBrand.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ModelBrandModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
