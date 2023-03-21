import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, SharedModule],
})
export class PostsModule {}
