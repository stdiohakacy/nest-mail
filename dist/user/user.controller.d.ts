import { MailService } from 'src/mail/mail.service';
import { IUser } from './user.entity';
export declare class UserController {
    private readonly mailService;
    constructor(mailService: MailService);
    register(user: IUser): Promise<any>;
}
