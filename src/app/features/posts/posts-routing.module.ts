import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ThreadsComponent } from '@posts/components/threads/threads.component';
import { PostsContainerComponent } from '@posts/components/posts-container/posts-container.component';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'threads',
        component: ThreadsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
