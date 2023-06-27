import { Component, Input } from '@angular/core';
import { Profile } from '@core/models/profile.model';
import { Observable } from 'rxjs';
import { Archetype } from '@creator/models/archetype.model';

@Component({
  selector: 'app-profile-display-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() profile: Profile;

  @Input() archetype$: Observable<Archetype | undefined>;
}
