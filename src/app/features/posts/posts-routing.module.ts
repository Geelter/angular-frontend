import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ThreadsComponent } from '@posts/components/threads/threads.component';
import { PostsContainerComponent } from '@posts/components/posts-container/posts-container.component';
import { PostsComponent } from '@posts/components/posts/posts.component';
import { canActivateCategories } from '@shared/guards/categories.guard';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [canActivateCategories],
      },
      {
        path: ':category_id/threads',
        component: ThreadsComponent,
      },
      {
        path: ':thread_id',
        component: PostsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
