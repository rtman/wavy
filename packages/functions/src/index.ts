import * as admin from 'firebase-admin';

import * as config from './config';
// const emailConfig = require('./src/initEmailConfig');
import { processImage } from './processImage';
import { processAudio } from './processAudio';

admin.initializeApp(config.firebaseConfig);

export { processImage };
