import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { PostsService } from '@posts/posts.service';
import { MsgService } from '@core/services/msg.service';

export const canActivateThreads: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  const categoryID = route.paramMap.get('id');
  const messageService = inject(MsgService);

  if (!categoryID) {
    return false;
  }

  const categoryThreads = await inject(PostsService).getThreadsForCategoryID(
    categoryID
  );

  if (categoryThreads.length > 0) {
    return true;
  } else {
    messageService.showError('Error fetching post categories');
    return false;
  }
};
