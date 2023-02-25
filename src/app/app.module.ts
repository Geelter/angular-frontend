import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth/auth.module';
import { AuthContainerComponent } from './features/auth/auth-container/auth-container/auth-container.component';

@NgModule({
  declarations: [AppComponent, AuthContainerComponent],
  imports: [CoreModule, AuthModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
