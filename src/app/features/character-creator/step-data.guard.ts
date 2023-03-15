import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Injectable()
export class StepDataGuard implements CanActivate {
  constructor(
    private router: Router,
    private creatorService: CharacterCreatorService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.creatorService.stepData) {
      return true;
    } else {
      this.creatorService.fetchStepData();
    }

    if (!this.creatorService.stepData) {
      return this.router.parseUrl('/');
    }

    return true;
  }
}
