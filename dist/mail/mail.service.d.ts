import { MailerService } from '@nestjs-modules/mailer';
import { IUser } from 'src/user/user.entity';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: IUser, token: string): Promise<any>;
}
