import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { PostsService } from '@posts/posts.service';
import { MsgService } from '@core/services/msg.service';

export const canActivatePosts: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  const threadID = route.paramMap.get('id');
  const messageService = inject(MsgService);

  if (!threadID) {
    return false;
  }

  const threadPosts = await inject(PostsService).getPostsForThreadID(threadID);

  if (threadPosts.length > 0) {
    return true;
  } else {
    messageService.showError('Error fetching post categories');
    return false;
  }
};
