import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, skipWhile } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '@core/services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  login(email: string, password: string) {
    return new Promise<User>((resolve, reject) => {
      this.supabase.client.auth
        .signInWithPassword({ email, password })
        .then(({ data, error }) => {
          if (error || !data) reject('Invalid email/password combination');

          resolve(data.user!);
        });
    });
  }

  register(email: string, password: string) {
    return new Promise<User>((resolve, reject) => {
      this.supabase.client.auth
        .signUp({ email, password })
        .then(({ data, error }) => {
          if (error || !data) reject('Invalid credentials');

          resolve(data.user!);
        });
    });
  }
  constructor(private supabase: SupabaseService) {}
}
