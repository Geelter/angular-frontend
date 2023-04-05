import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  get clientAuth() {
    return this.supabase.client.auth;
  }
  async login(email: string, password: string) {
    const {
      data: { user, session },
      error,
    } = await this.clientAuth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!error && user && session) {
      await this.router.navigate(['/']);
    }
  }

  async register(email: string, password: string) {
    const {
      data: { user, session },
      error,
    } = await this.clientAuth.signUp({
      email: email,
      password: password,
    });

    if (!error && user && session) {
      await this.router.navigate(['/']);
    }
  }

  logout() {
    this.clientAuth.signOut().catch(console.error);
    const _ = this.router.navigate(['/auth', 'login']);
  }

  async getSession() {
    const {
      data: { session },
    } = await this.clientAuth.getSession();

    return session;
  }

  constructor(private supabase: SupabaseService, private router: Router) {}
}
