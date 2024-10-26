import { CanActivateChildFn } from '@angular/router';

export const adminGGuard: CanActivateChildFn = (childRoute, state) => {

  return false
};
