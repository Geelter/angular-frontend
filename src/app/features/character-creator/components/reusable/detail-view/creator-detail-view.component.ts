import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-creator-detail-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './creator-detail-view.component.html',
  styleUrls: ['./creator-detail-view.component.scss'],
})
export class CreatorDetailViewComponent {
  @Input() title = '';

  @Input() detailText = '';
}
