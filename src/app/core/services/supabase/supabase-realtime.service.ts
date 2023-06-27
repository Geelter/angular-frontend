import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { RealtimeChannel } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseRealtimeService {
  constructor(private supabase: SupabaseService) {}

  // subscribeToPosts() {
  //   this.supabase.client
  //     .from('posts')
  //     .on('INSERT', payload => {
  //       this.store.dispatch(new AddPost(payload.new));
  //     })
  //     .on('UPDATE', payload => {
  //       this.store.dispatch(new UpdatePost(payload.new));
  //     })
  //     .on('DELETE', payload => {
  //       this.store.dispatch(new DeletePost(payload.old));
  //     })
  //     .subscribe();
  // }
}
