import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IUser } from 'src/user/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendUserConfirmation(user: IUser, token: string) {
    const url = `http://localhost:4000/auth/confirm?token=${token}`;

    return this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirm your email',
      template: './confirmation',
      context: {
        name: user.name,
        url,
      }
    })
  }
}
