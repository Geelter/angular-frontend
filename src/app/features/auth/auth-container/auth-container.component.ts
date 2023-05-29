import { Component, OnInit } from '@angular/core';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  constructor(
    private supabaseAuth: SupabaseAuthService,
    private navigationService: NavigationService
  ) {}
  redirectIfLoggedIn() {
    this.supabaseAuth.getSession().then(result => {
      if (result) {
        this.navigationService.navigateToRoot();
      }
    });
  }
  ngOnInit() {
    this.redirectIfLoggedIn();
  }
}
