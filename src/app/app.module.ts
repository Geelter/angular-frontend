import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { MenubarComponent } from './header/menubar/menubar.component';
import { BannerComponent } from './header/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { SigninFormComponent } from './auth/signin-form/signin-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    BannerComponent,
    SigninFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
  ],
  providers: [],
  exports: [MenubarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
