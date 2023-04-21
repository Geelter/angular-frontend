import { Component, OnInit } from '@angular/core';
import { PostsService } from '@posts/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  PlayerCharacter,
  SupabaseCharactersService,
} from '@core/services/supabase-characters.service';
import { Post } from '../../models/post';
import Dictionary from '@shared/dictionary';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private charactersService: SupabaseCharactersService
  ) {}

  posts: Promise<Post[]>;

  playerCharacters = new Dictionary<PlayerCharacter>();

  postsAreLoading: boolean;

  postsArrayIsEmpty: boolean;

  ngOnInit() {
    let threadID = '';

    this.postsAreLoading = true;
    this.postsArrayIsEmpty = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      threadID = params.get('thread_id')!;
    });

    this.charactersService.getPlayerCharacters().then(characters => {
      this.playerCharacters = characters;
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
