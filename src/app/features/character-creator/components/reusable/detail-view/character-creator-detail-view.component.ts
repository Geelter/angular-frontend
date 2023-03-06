import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-creator-detail-view',
  templateUrl: './character-creator-detail-view.component.html',
  styleUrls: ['./character-creator-detail-view.component.scss'],
})
export class CharacterCreatorDetailViewComponent {
  @Input() title = '';
  @Input() detailText = '';
}
