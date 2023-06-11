import { Category } from '@posts/models/category';
import { Thread } from '@posts/models/thread';
import { Post } from '@posts/models/post';

interface PostsDataProvider {
  fetchCategories(): Promise<Category[]>;
  fetchThreads(categoryID: string): Promise<Thread[]>;
  fetchPosts(threadID: string): Promise<Post[]>;
}
