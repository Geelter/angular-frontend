import { CanActivate, Router, UrlTree } from '@angular/router';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private supabaseAuth: SupabaseAuthService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean | UrlTree> {
    return new Promise(resolve => {
      this.supabaseAuth
        .getSession()
        .then(data => {
          if (data) {
            resolve(true);
          } else {
            const _ = this.router.navigate(['/auth', 'login']);
            resolve(false);
          }
        })
        .catch(() => {
          const _ = this.router.navigate(['/auth', 'login']);
          resolve(false);
        });
    });
  }
}
