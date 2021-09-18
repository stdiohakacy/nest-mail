import { IUser } from 'src/user/user.entity';
import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(user: IUser): Promise<any>;
}
