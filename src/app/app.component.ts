import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<fromApp.AppState>
  ) {}

  isAuthorized: boolean;

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.store.dispatch(AuthActions.autoLogin());
  }
}
