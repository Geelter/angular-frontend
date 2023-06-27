import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileBrowserComponent } from './components/profile-browser/profile-browser.component';

@NgModule({
  declarations: [
    ProfileDisplayComponent,
    ProfileCardComponent,
    ProfileBrowserComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ProfileCardComponent],
})
export class ProfilesModule {}
