import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../../models/post.model';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import {
  selectPaginationStateForChosenThread,
  selectPostsIsLoading,
  selectPostsWithIDsForCurrentPage,
} from '@core/store/selectors/posts/posts.selectors';
import { selectProfileForID } from '@core/store/selectors/profiles.selectors';
import { changeCurrentPage } from '@core/store/actions/posts/posts.actions';
import { EntityPaginationState } from '@core/store/state/pagination.state';
import { PostsManagerService } from '@posts/services/posts-manager.service';
import { UserProfilesManagerService } from '@core/services/user-profiles-manager.service';
import { Profile } from '@core/models/profile.model';

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
    private profilesManagerService: UserProfilesManagerService
  ) {}

  threadID: number;

  postsForCurrentPage$: Observable<Post[] | null>;

  postsAreLoading$: Observable<boolean>;

  postsPaginationState$: Observable<EntityPaginationState>;

  getProfile$(profileID: string): Observable<Profile | undefined> {
    return this.store.select(selectProfileForID({ profileID: profileID }));
  }

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

    this.postsForCurrentPage$ = this.store
      .select(selectPostsWithIDsForCurrentPage)
      .pipe(
        tap(posts => {
          if (posts) {
            const associatedProfileIDs = new Set(
              posts.map(post => post.author_id)
            );
            this.profilesManagerService.initialize(
              Array.from(associatedProfileIDs)
            );
          }
        })
      );

    this.postsPaginationState$ = this.store.select(
      selectPaginationStateForChosenThread
    );
  }

  ngOnDestroy() {
    this.postsManagerService.cleanUp();
    this.profilesManagerService.cleanUp();
  }
}
