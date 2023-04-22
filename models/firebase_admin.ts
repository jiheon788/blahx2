import * as admin from 'firebase-admin';

interface IConfig {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
      FirebaseAdmin.instance = new FirebaseAdmin();
      FirebaseAdmin.instance.bootstrap();
    }

    return FirebaseAdmin.instance;
  }

  public bootstrap(): void {
    const hasApp = admin.apps.length !== 0;

    if (hasApp) {
      this.init = true;
      return;
    }

    const config: IConfig = {
      credential: {
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
        clientEmail: process.env.clientEmail || '',
        projectId: process.env.projectId || '',
      },
    };

    admin.initializeApp({ credential: admin.credential.cert(config.credential) });
    console.info('bootstrap firebase admin');
  }

  public get Firebase(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }

    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }

    return admin.auth();
  }
}

export default FirebaseAdmin;
