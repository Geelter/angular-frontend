import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectFailedAction } from '@core/store/selectors/global.selectors';
import { clearActionError } from '@core/store/actions/global.actions';
import { NavigationService } from '@core/services/navigation.service';
import { MsgService } from '@core/services/msg.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
})
export class ErrorAlertComponent {
  constructor(
    private messageService: MsgService,
    private navigationService: NavigationService,
    private store: Store
  ) {}

  repeatFailedAction() {
    this.store
      .select(selectFailedAction)
      .pipe(take(1))
      .subscribe(failedAction => {
        if (failedAction) {
          this.messageService.clearMessages('handleError');
          this.store.dispatch(failedAction);
          this.store.dispatch(clearActionError());
        }
      });
  }

  public navigateBack() {
    this.messageService.clearMessages('handleError');
    this.navigationService.navigateBack();
  }
}
