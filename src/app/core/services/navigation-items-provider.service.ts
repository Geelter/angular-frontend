import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationItemsProviderService {
  constructor(private supabaseAuth: SupabaseAuthService) {}

  private items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/'],
    },
    {
      label: 'Characters',
      icon: 'pi pi-fw pi-id-card',
      items: [
        {
          label: 'Create',
          icon: 'pi pi-fw pi-user-plus',
          routerLink: ['/creator', 'archetype'],
        },
        {
          label: 'Browse',
          icon: 'pi pi-fw pi-book',
        },
      ],
    },
    {
      label: 'Posts',
      icon: 'pi pi-fw pi-book',
      routerLink: ['/posts', 'categories'],
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      command: () => this.supabaseAuth.logout(),
    },
  ];

  getNavigationItems() {
    return this.items;
  }
}
