import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabViewModule} from "primeng/tabview";

import {NavigationItemProviderService} from "./services/navigation-item-provider.service";

import {MenubarComponent} from "./header/menubar/menubar.component";
import {BannerComponent} from "./header/banner/banner.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
  ],
  providers: [],
  exports: [
    MenubarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
