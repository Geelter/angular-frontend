import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostsRoutingModule } from '@posts/posts-routing.module';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostsService } from '@posts/posts.service';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';

@NgModule({
  providers: [PostsService],
  declarations: [
    CategoriesComponent,
    ThreadsComponent,
    PostsContainerComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  exports: [CategoriesComponent],
})
export class PostsModule {}
