import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<fromApp.AppState>
  ) {}

  storeSubscription: Subscription;
  isAuthorized: boolean;

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.store.dispatch(AuthActions.autoLogin());
    this.storeSubscription = this.store
      .select('auth')
      .subscribe((authState) => {
        this.isAuthorized = !!authState.token;
      });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}
