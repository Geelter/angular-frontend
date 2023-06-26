import { Category } from '@posts/models/category.model';
import { Thread } from '@posts/models/thread.model';
import { Post } from '@posts/models/post.model';

interface PostsDataProvider {
  fetchCategories(): Promise<Category[]>;
  fetchThreads(categoryID: string): Promise<Thread[]>;
  fetchPosts(threadID: string): Promise<Post[]>;
}
