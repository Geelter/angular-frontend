import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PostsService } from '@posts/posts.service';
import { MsgService } from '@core/services/msg.service';

export const canActivateCategories: CanActivateFn = async () => {
  const messageService = inject(MsgService);
  const postCategories = await inject(PostsService).getPostCategories();

  if (postCategories.length > 0) {
    return true;
  } else {
    messageService.showError('Error fetching post categories');
    return false;
  }
};
