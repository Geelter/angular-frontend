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
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark',
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video',
            },
          ],
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash',
        },
        {
          separator: true,
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link',
        },
      ],
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left',
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right',
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center',
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify',
        },
      ],
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print',
                },
              ],
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List',
            },
          ],
        },
      ],
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
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      command: () => this.supabaseAuth.logout(),
    },
  ];

  getNavigationItems() {
    return this.items;
  }
}
