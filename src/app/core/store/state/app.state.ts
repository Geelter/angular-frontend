import { PlayerCharactersState } from '@core/store/state/player-characters.state';
import { PostCategoriesState } from '@core/store/state/posts/post-categories.state';
import { PostThreadsState } from '@core/store/state/posts/post-threads.state';
import { PostsState } from '@core/store/state/posts/posts.state';
import { GlobalState } from '@core/store/state/global.state';

export interface AppState {
  playerCharacters: PlayerCharactersState;
  postCategories: PostCategoriesState;
  postThreads: PostThreadsState;
  posts: PostsState;
  global: GlobalState;
}
