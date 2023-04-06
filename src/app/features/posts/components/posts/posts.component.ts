import { Component, OnInit } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { Post } from '@assets/dummy-data/posts';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  posts: Promise<Post[]>;

  postsAreLoading: boolean;

  postsArrayIsEmpty: boolean;

  ngOnInit() {
    let threadID = '';

    this.postsAreLoading = true;
    this.postsArrayIsEmpty = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      threadID = params.get('thread_id')!;
    });

    this.posts = this.postsService
      .getPostsForThreadID(threadID)
      .then(posts => {
        this.postsArrayIsEmpty = !posts.length;
        return posts;
      })
      .finally(() => {
        this.postsAreLoading = false;
      });
  }
}
