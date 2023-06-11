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

@NgModule({
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
