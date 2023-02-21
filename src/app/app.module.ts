import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AuthModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
