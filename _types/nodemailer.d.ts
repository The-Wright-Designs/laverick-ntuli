declare module "nodemailer" {
  export interface TransportOptions {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
    requireTLS?: boolean;
  }

  export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    replyTo?: string;
    html?: string;
    text?: string;
  }

  export interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<any>;
  }

  export function createTransport(options: TransportOptions): Transporter;
}
