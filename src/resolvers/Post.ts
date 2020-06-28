import {
  Resolver,
  Query,
  Mutation,
  Arg,
  // ObjectType,
  // Field
} from "type-graphql";
import { Post } from "../entity/Post";

// @ObjectType()
// class PostResponse {
//   @Field(() => Post)
//   post: Post;
// }

@Resolver()
export default class PostResolver {
  @Query(() => String)
  hello() {
    return "hi posts!";
  }

  @Query(() => [Post])
  posts() {
    return Post.find();
  }
  

  @Mutation(() => Boolean)
  async addPost(
    @Arg("subject") subject: string,
    @Arg("content") content: string
  ) {
    try {
      await Post.insert({
        subject,
        content
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
