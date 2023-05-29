import { Component, OnDestroy } from '@angular/core';
import { SupabaseRealtimeService } from '@core/services/supabase-realtime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  constructor(private supabaseRealtime: SupabaseRealtimeService) {}

  ngOnDestroy() {
    this.supabaseRealtime.clearBroadcastInterval();
  }
}
