import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export function featureFlagGuard(
  flagName: string,
  redirectRoute: string
): CanActivateFn {
  return () => {
    // let routeToGo = '';
    const router: Router = inject(Router);
    router;
    return true;
  };
}
