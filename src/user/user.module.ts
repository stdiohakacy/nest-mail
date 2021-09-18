import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { UserController } from './user.controller';

@Module({
  imports: [MailModule],
  controllers: [UserController],
})
export class UserModule {}
