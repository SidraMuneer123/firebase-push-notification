import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App;

  onModuleInit() {
    const serviceAccount: ServiceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    };

    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  async sendNotification(token: string, payload: admin.messaging.MessagingPayload) {
    return this.app.messaging().sendToDevice(token, payload);
  }
}
