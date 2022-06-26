import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from '../User/user.service';
import { TweetService } from './tweet.service';

@Resolver('Tweet')
export class TweetResolver {
  constructor(
    private tweetService: TweetService,
    private userService: UserService,
  ) {}

  @Query()
  async allTweets() {
    return await this.tweetService.findAll();
  }

  @ResolveField('author')
  async author(@Parent() tweet) {
    return this.userService.findOneById(tweet.userId);
  }

  @Mutation()
  async postTweet(@Args('userId') userId: number, @Args('text') text: string) {
    return this.tweetService.create({
      text,
      userId,
    });
  }

  @Mutation()
  async deleteTweet(@Args('id') id: number) {
    await this.tweetService.delete(id);
    return id;
  }
}
