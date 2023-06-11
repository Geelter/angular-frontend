import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private supabaseAuth: SupabaseAuthService,
    private router: Router
  ) {}

  redirectIfLoggedIn() {
    this.supabaseAuth.getSession().then(result => {
      if (result) {
        const _ = this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;

    // this.redirectIfLoggedIn();
  }
}
