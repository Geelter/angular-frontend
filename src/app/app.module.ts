import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SigninFormComponent } from './auth/signin-form/signin-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';

@NgModule({
  declarations: [AppComponent, SigninFormComponent, SignupFormComponent],
  imports: [CoreModule, FormsModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
