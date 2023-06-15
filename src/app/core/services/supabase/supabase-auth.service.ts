import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { MsgService } from '@core/services/msg.service';
import { AuthError } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  get clientAuth() {
    return this.supabase.client.auth;
  }

  async login(email: string, password: string) {
    const { data, error } = await this.clientAuth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      this.messageService.showError('Login failed', error.message);
      return;
    }
    this.messageService.showSuccess('Login successful');
    return data;
  }

  async register(username: string, email: string, password: string) {
    const { data, error } = await this.clientAuth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });

    if (error) {
      this.messageService.showError('Registration failed', error.message);
      return;
    }
    this.messageService.showSuccess('Registration successful');
    return data;
  }

  async logout() {
    try {
      await this.clientAuth.signOut();
      this.messageService.showSuccess('Logout successful');
      return true;
    } catch (error) {
      if (error instanceof AuthError) {
        this.messageService.showError('Logout failed', error.message);
      }

      this.messageService.showError('Unexpected error', 'Try again');

      return false;
    }
  }

  async getSession() {
    const { data } = await this.clientAuth.getSession();
    return data?.session;
  }

  async getCurrentUserID() {
    const session = await this.getSession();

    return session?.user.id;
  }

  // Implement this to fetch the associated character on signup/signin
  // async getAssociatedPlayerCharacter(userID: string | undefined) {}

  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}
}
