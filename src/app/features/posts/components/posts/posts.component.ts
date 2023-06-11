import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SupabaseCharactersService } from '@core/services/supabase/supabase-characters.service';
import { Post } from '../../models/post';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectPaginationStateForChosenThread,
  selectPostsIsLoading,
  selectPostsWithIDsForCurrentPage,
} from '@core/store/selectors/posts/posts.selectors';
import { changeCurrentPage } from '@core/store/actions/posts/posts.actions';
import { EntityPaginationState } from '@core/store/state/pagination.state';
import { PostsManagerService } from '@posts/services/posts-manager.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private postsManagerService: PostsManagerService,
    private charactersService: SupabaseCharactersService
  ) {}

  threadID: number;

  postsForCurrentPage$: Observable<Post[] | null>;

  postsAreLoading$: Observable<boolean>;

  postsPaginationState$: Observable<EntityPaginationState>;

  playerCharacters: Promise<Dictionary<PlayerCharacter>>;

  getPaginatorFirst(paginationState: EntityPaginationState): number {
    return (paginationState.currentPage - 1) * paginationState.pageSize;
  }

  onPageChange(event: { first: number; rows: number }) {
    const newPageNumber = event.first / event.rows + 1;

    this.store.dispatch(
      changeCurrentPage({ pageNumber: newPageNumber, threadID: this.threadID })
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.threadID = +params.get('thread_id')!;
    });
    this.postsManagerService.initialize(this.threadID);

    this.postsAreLoading$ = this.store.select(selectPostsIsLoading);
    this.postsForCurrentPage$ = this.store.select(
      selectPostsWithIDsForCurrentPage
    );
    this.postsPaginationState$ = this.store.select(
      selectPaginationStateForChosenThread
    );

    this.playerCharacters = this.charactersService.getPlayerCharacters();
  }

  ngOnDestroy() {
    this.postsManagerService.cleanUp();
  }
}
