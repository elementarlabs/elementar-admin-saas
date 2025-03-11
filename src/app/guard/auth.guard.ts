import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return of(true).pipe(
    switchMap((user) => {
      if (user) {
        return of(true);
      } else {
        router.navigate(['/login'])
        return of(false);
      }
    })
  );
};
