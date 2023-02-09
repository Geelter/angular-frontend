import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { BannerComponent } from './header/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { appReducer } from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  exports: [MenubarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
