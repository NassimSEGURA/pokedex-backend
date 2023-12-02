import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [AuthModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
