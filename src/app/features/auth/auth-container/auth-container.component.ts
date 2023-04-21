import { Component, OnInit } from '@angular/core';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  constructor(
    private supabaseAuth: SupabaseAuthService,
    private router: Router
  ) {}
  redirectIfLoggedIn() {
    this.supabaseAuth.getSession().then(result => {
      if (result) {
        const _ = this.router.navigate(['/home']);
      }
    });
  }
  ngOnInit() {
    this.redirectIfLoggedIn();
  }
}
