import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface User {

}

export interface AppState {
  currentUser: User | null;
}

const initialState: AppState = {
  currentUser: null
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setCurrentUser(currentUser: User | null): void {
      patchState(store, {
        currentUser
      });
    }
  }))
);
