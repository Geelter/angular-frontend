import { isDevMode, NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '@core/store/reducers/app.reducer';
import * as postCategoriesEffects from '@core/store/effects/posts/post-categories.effects';
import * as postThreadsEffects from '@core/store/effects/posts/post-threads.effects';
import * as postsEffects from '@core/store/effects/posts/posts.effects';

import { BannerComponent } from './header/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { HomeComponent } from './home/home.component';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    MenubarComponent,
    HomeComponent,
  ],
  providers: [MessageService],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(
      postCategoriesEffects,
      postThreadsEffects,
      postsEffects
    ),
    ToastModule,
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HttpClientModule,
    ToastModule,
  ],
})
export class CoreModule {}
