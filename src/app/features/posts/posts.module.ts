import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostsRoutingModule } from '@posts/posts-routing.module';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { ErrorAlertComponent } from '@posts/components/error-alert/error-alert.component';
import { PostCategoriesService } from '@posts/services/post-categories.service';
import { PostThreadsService } from '@posts/services/post-threads.service';
import { PostsService } from '@posts/services/posts.service';

@NgModule({
  providers: [PostCategoriesService, PostThreadsService, PostsService],
  declarations: [
    CategoriesComponent,
    ThreadsComponent,
    PostsContainerComponent,
    PostsComponent,
    PostEditorComponent,
    ErrorAlertComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  exports: [CategoriesComponent],
})
export class PostsModule {}
