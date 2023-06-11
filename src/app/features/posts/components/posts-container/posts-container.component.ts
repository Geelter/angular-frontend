import { Component, OnInit } from '@angular/core';
import { selectError } from '@core/store/selectors/global.selectors';
import { Store } from '@ngrx/store';
import { MsgService } from '@core/services/msg.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
})
export class PostsContainerComponent implements OnInit {
  constructor(private store: Store, private messageService: MsgService) {}
  ngOnInit() {
    this.store.select(selectError).subscribe(error => {
      if (error) {
        this.messageService.showErrorConfirm(
          error.name,
          error.message,
          'handleError'
        );
      }
    });
  }
}
