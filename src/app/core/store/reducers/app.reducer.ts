import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '@core/store/state/app.state';
import { playerCharactersReducer } from './player-characters.reducer';
import { postCategoriesReducer } from '@core/store/reducers/posts/post-categories.reducer';
import { postThreadsReducer } from '@core/store/reducers/posts/post-threads.reducer';
import { postsReducer } from '@core/store/reducers/posts/posts.reducer';
import { globalReducer } from '@core/store/reducers/global.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  playerCharacters: playerCharactersReducer,

  postCategories: postCategoriesReducer,

  postThreads: postThreadsReducer,

  posts: postsReducer,

  global: globalReducer,
};
