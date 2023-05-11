import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/home/home.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@auth/auth.module').then(module => module.AuthModule),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('@posts/posts.module').then(module => module.PostsModule),
      },
      {
        path: 'creator',
        loadChildren: () =>
          import('@creator/character-creator.module').then(
            module => module.CharacterCreatorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
