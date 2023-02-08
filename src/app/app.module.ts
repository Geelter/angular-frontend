import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';

import { MenubarComponent } from './header/menubar/menubar.component';
import { BannerComponent } from './header/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { appReducer } from './store/app.reducer';

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
  ],
  providers: [],
  exports: [MenubarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
