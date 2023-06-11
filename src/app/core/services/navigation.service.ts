import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  async navigateToRoot() {
    await this.router.navigate(['/']);
  }

  async navigateToLogin() {
    await this.router.navigate(['/auth', 'login']);
  }

  async navigateBack() {
    await this.router.navigate(['..']);
  }

  constructor(private router: Router) {}
}
