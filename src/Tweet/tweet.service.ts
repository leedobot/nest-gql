import { Injectable } from '@nestjs/common';

type CreateTweetInput = {
  text: string;
  userId: number;
};

@Injectable()
export class TweetService {
  tweets = [
    {
      id: 1,
      text: 'first one',
      userId: 2,
    },
    {
      id: 2,
      text: 'second one',
      userId: 1,
    },
  ];

  async findAll() {
    return this.tweets;
  }

  async findByUserId(userId: number) {
    return this.tweets.filter((tweet) => tweet.userId === userId);
  }

  async create(input: CreateTweetInput) {
    console.log(input);
    const tweet = {
      id: this.tweets.length + 1,
      text: input.text,
      userId: Number(input.userId),
    };
    this.tweets.push(tweet);
    return tweet;
  }

  async delete(id: number) {
    this.tweets = this.tweets.filter((tweet) => {
      return tweet.id !== Number(id);
    });
  }
}
