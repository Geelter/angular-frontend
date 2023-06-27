import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '@core/models/profile.model';

@Component({
  selector: 'app-profile-display-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss'],
})
export class ProfileDisplayComponent {
  @Input() profile$: Observable<Profile>;
}
