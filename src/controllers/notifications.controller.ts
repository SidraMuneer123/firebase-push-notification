import { Post , Body , Controller } from "@nestjs/common";
import { FirebaseService } from "src/services/firebase.service";

@Controller('notifiction')
export class NotificationController{
  constructor(private readonly firebaseservice : FirebaseService){}

  @Post()
  async sendNotification(@Body('token') token: string, @Body('message') message: string) {
    const payload = {
      notification: {
        title: 'New Notification',
        body: message,
      },
    };
    return this.firebaseservice.sendNotification(token, payload);

}
}