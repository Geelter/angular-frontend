import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creator-detail-view',
  templateUrl: './creator-detail-view.component.html',
  styleUrls: ['./creator-detail-view.component.scss'],
})
export class CreatorDetailViewComponent {
  @Input() title = '';
  @Input() detailText = '';
}
