import { Component, OnInit } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Thread } from '../../models/thread';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit {
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  categoryID: string;

  categoryThreads: Promise<Thread[]>;

  threadsAreLoading: boolean;

  ngOnInit() {
    this.threadsAreLoading = true;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = params.get('category_id')!;
    });

    this.categoryThreads = this.postsService
      .getThreadsForCategoryID(this.categoryID)
      .finally(() => {
        this.threadsAreLoading = false;
      });
  }
}
