import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FirebaseService } from './services/firebase.service';
import { NotificationController } from './controllers/notifications.controller';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [FirebaseService],
})
export class AppModule {}
