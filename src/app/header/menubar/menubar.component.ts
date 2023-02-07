import {MenuItem} from 'primeng/api';
import {Component, OnInit} from "@angular/core";
import {NavigationItemProviderService} from "../../services/navigation-item-provider.service";
@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html'
})
export class MenubarComponent implements OnInit {
  constructor(
    private navigationItemService: NavigationItemProviderService
  ) {}
  items: MenuItem[];

  ngOnInit() {
    this.items = this.navigationItemService.getNavigationItems();
  }
}
