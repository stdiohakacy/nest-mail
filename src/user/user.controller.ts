import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { IUser } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly mailService: MailService) {}

    @Post('/register')
    register(@Body() user: IUser) {
        const token = Math.floor(1000 + Math.random() * 9000).toString();
        return this.mailService.sendUserConfirmation(user, token);
    }
}
