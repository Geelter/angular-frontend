import { isDevMode, NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

import { AuthEffects } from '@auth/store/auth.effects';
import { appReducer } from 'app/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { BannerComponent } from './header/banner/banner.component';
import { CharacterSidebarComponent } from './sidebars/character-sidebar/character-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './header/menubar/menubar.component';

@NgModule({
  declarations: [
    BannerComponent,
    CharacterSidebarComponent,
    HeaderComponent,
    MenubarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SharedModule,
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CharacterSidebarComponent,
    EffectsModule,
    HeaderComponent,
    HttpClientModule,
    StoreModule,
  ],
})
export class CoreModule {}
