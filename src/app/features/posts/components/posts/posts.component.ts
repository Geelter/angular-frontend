import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SupabaseCharactersService } from '@core/services/supabase/supabase-characters.service';
import { Post } from '../../models/post';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  selectPostsByThread,
  selectPostsFetchDate,
  selectPostsIsLoading,
} from '@core/store/selectors/posts/posts.selectors';
import { fetchPostsForThread } from '@core/store/actions/posts/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private charactersService: SupabaseCharactersService
  ) {}

  threadID: number;

  posts$: Observable<Post[]>;

  postsAreLoading$: Observable<boolean>;

  postsFetchDate$: Observable<Map<number, Date>>;

  playerCharacters: Promise<Dictionary<PlayerCharacter>>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.threadID = +params.get('thread_id')!;
    });

    this.posts$ = this.store.select(selectPostsByThread(this.threadID));
    this.postsAreLoading$ = this.store.select(selectPostsIsLoading);
    this.postsFetchDate$ = this.store.select(selectPostsFetchDate);

    this.playerCharacters = this.charactersService.getPlayerCharacters();

    this.postsFetchDate$.pipe(take(1)).subscribe(dates => {
      if (!dates.has(this.threadID) || dates.get(this.threadID)! < new Date()) {
        this.store.dispatch(fetchPostsForThread({ threadID: this.threadID }));
      }
    });
  }
}
