import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  async navigateToRoot() {
    await this.router.navigate(['/']);
  }

  async navigateToLogin() {
    await this.router.navigate(['/auth', 'login']);
  }

  async navigateToRegister() {
    await this.router.navigate(['/auth', 'register']);
  }

  async navigateBack() {
    await this.router.navigate(['..']);
  }

  async navigateToPostCategories() {
    await this.router.navigate(['/posts', 'categories']);
  }

  async navigateToCategoryThreads(categoryID: number) {
    await this.router.navigate(['/posts', categoryID, 'threads']);
  }

  async navigateToThreadPosts(threadID: number) {
    await this.router.navigate(['/posts', threadID]);
  }

  async navigateToProfileBrowser() {
    await this.router.navigate(['/profile', 'browser']);
  }

  async navigateToProfileDetail() {
    await this.router.navigate(['/profile', 'detail']);
  }

  constructor(private router: Router) {}
}
