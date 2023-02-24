import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { NavigationItemsProviderService } from '@core/services/navigation-items-provider.service';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html',
})
export class MenubarComponent implements OnInit {
  constructor(private navigationItemService: NavigationItemsProviderService) {}
  items: MenuItem[];

  ngOnInit() {
    this.items = this.navigationItemService.getNavigationItems();
  }
}
