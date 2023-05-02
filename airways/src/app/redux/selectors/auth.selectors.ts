import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@redux/models/state.models';

export const selectAuth = createFeatureSelector<AuthState>('auth');
const AuthMailSelector = createSelector(selectAuth, (state) => state.email);
const AuthIsLoggedSelector = createSelector(
  selectAuth,
  (state) => state.isLogged
);
const AuthTokenSelector = createSelector(selectAuth, (state) => state.token);
const AuthUserSelector = createSelector(selectAuth, (state) => state.user);
const AuthErrorSelector = createSelector(selectAuth, (state) => state.error);

export const AuthSelectors = {
  AuthMailSelector,
  AuthIsLoggedSelector,
  AuthTokenSelector,
  AuthUserSelector,
  AuthErrorSelector,
};
