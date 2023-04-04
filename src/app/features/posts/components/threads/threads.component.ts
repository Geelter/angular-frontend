import { Component, OnInit } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Thread } from '@assets/dummy-data/posts';

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

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = params.get('id')!;
    });

    if (this.postsService.threadsCached(this.categoryID)) {
      this.categoryThreads = new Promise<Thread[]>(resolve => {
        resolve(this.postsService.getSavedCategoryThreads(this.categoryID));
      });
    } else {
      this.categoryThreads = this.postsService.fetchCategoryThreads(
        this.categoryID
      );
    }
  }
}
