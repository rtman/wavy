import nodemailer from 'nodemailer';

import * as WAVY_TEAM_COMMUNICATION_SERVICE_ACCOUNT from '../../secrets/dev/wavy-team-communication-7eb6e4f1891c.json';

export const makeEmailTransporter = () => {
  return nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //   user: process.env.WAVY_TEAM_EMAIL_ADDRESS,
    //   pass: process.env.WAVY_TEAM_EMAIL_PASSWORD,
    // },
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: WAVY_TEAM_COMMUNICATION_SERVICE_ACCOUNT.client_email,
      serviceClient: WAVY_TEAM_COMMUNICATION_SERVICE_ACCOUNT.client_id,
      privateKey: WAVY_TEAM_COMMUNICATION_SERVICE_ACCOUNT.private_key,
    },
  });
};
