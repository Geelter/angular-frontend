import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ThreadsComponent } from '@posts/components/threads/threads.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'threads',
    component: ThreadsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
