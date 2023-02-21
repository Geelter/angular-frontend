import { isDevMode, NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthEffects } from '@auth/store/auth.effects';
import { appReducer } from '../store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';

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
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CharacterSidebarComponent,
    CheckboxModule,
    EffectsModule,
    HeaderComponent,
    HttpClientModule,
    InputTextModule,
    StoreModule,
  ],
})
export class CoreModule {}
