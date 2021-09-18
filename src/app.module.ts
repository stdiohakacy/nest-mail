import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MailModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
