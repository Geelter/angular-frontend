import { ProfilesState } from '@core/store/state/profiles.state';
import { PostCategoriesState } from '@core/store/state/posts/post-categories.state';
import { PostThreadsState } from '@core/store/state/posts/post-threads.state';
import { PostsState } from '@core/store/state/posts/posts.state';
import { GlobalState } from '@core/store/state/global.state';
import { ArchetypesState } from '@core/store/state/archetypes.state';

export interface AppState {
  profiles: ProfilesState;
  archetypes: ArchetypesState;
  postCategories: PostCategoriesState;
  postThreads: PostThreadsState;
  posts: PostsState;
  global: GlobalState;
}
