import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async allUsers() {
    return this.userService.findAll();
  }

  @ResolveField('fullName')
  async author(@Parent() user) {
    const { lastName, firstName } = user;
    return `${firstName} ${lastName}`;
  }

  @Query()
  async user(@Args('id') id: number) {
    return this.userService.findOneById(id);
  }
}
