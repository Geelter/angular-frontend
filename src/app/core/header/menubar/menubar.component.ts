import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { NavigationItemsProviderService } from '@core/services/navigation-items-provider.service';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  constructor(private navigationItemService: NavigationItemsProviderService) {}
  items: MenuItem[];

  sidebarVisible = false;

  ngOnInit() {
    this.items = this.navigationItemService.getNavigationItems();
  }
}
