import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TweetResolver } from './tweet.resolver';
import { TweetService } from './tweet.service';

@Module({
  imports: [UserModule],
  providers: [TweetService, TweetResolver],
})
export class TweetModule {}
