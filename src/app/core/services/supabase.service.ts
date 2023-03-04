import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '@env/environment';

const options = {
  auth: {
    storageKey: 'supabase',
    persistSession: true,
    autoRefreshToken: true,
  },
};

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  public client: SupabaseClient;

  constructor() {
    this.client = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      options
    );
  }
}
