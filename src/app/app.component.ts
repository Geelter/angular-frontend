import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  redirectIfLoggedIn() {
    this.supabaseAuth.getSession().then(result => {
      if (result) {
        const _ = this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;

    this.redirectIfLoggedIn();
  }
}
