import { isDevMode, NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreModule } from '@ngrx/store';

import { BannerComponent } from './header/banner/banner.component';
import { CharacterSidebarComponent } from './sidebars/character-sidebar/character-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    BannerComponent,
    CharacterSidebarComponent,
    HeaderComponent,
    MenubarComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CharacterSidebarComponent,
    HeaderComponent,
    HttpClientModule,
  ],
})
export class CoreModule {}
