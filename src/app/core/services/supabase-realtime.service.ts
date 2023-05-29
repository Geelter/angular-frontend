import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { RealtimeChannel } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseRealtimeService {
  broadcastChannel: RealtimeChannel;

  private broadcastInterval: NodeJS.Timer;

  clearBroadcastInterval() {
    // clearInterval(this.broadcastInterval);
  }

  constructor(private supabase: SupabaseService) {
    // this.broadcastChannel = this.supabase.client.channel('room1', {
    //   config: {
    //     broadcast: {
    //       self: true,
    //     },
    //   },
    // });
    //
    // this.broadcastChannel
    //   .on('broadcast', { event: 'cursor-pos' }, payload => {
    //     console.log('Listen log');
    //     console.log(payload);
    //   })
    //   .subscribe(status => {
    //     const subDate = Date.now();
    //     if (status === 'SUBSCRIBED') {
    //       // now you can start broadcasting cursor positions
    //       this.broadcastInterval = setInterval(() => {
    //         this.broadcastChannel.send({
    //           type: 'broadcast',
    //           event: 'cursor-pos',
    //           payload: { x: Math.random(), y: Math.random() },
    //         });
    //         console.log('Broadcast status from: ' + subDate);
    //         console.log(status);
    //       }, 2000);
    //     }
    //   });
  }
}
