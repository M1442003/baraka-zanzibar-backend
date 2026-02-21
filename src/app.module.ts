import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { ToursModule } from './tours/tours.module';
import { HotelsModule } from './hotels/hotels.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ToursModule,
    HotelsModule,
    AuthModule,
  ],
})
export class AppModule {}
