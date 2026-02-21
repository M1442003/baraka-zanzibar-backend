import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { ToursModule } from './modules/tours/tours.module';
import { HotelsModule } from './modules/hotels/hotels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ToursModule,
    HotelsModule,
  ],
})
export class AppModule {}
