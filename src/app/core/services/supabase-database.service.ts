import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class SupabaseDatabaseService {
  constructor(private supabase: SupabaseService) {}
}
