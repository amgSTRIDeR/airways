import { AuthState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@redux/actions/auth.actions';

export const initialState: AuthState = {
  isLogged: false,
  token: null,
  email: null,
  user: null,
  error: null,
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.LoginStart, (state, action) => ({
    ...state,
    email: action.email,
    isLogged: false,
  })),
  on(AuthActions.LoginLoadedSuccess, (state, action) => ({
    ...state,
    isLogged: true,
    token: action.token,
    error: null,
  })),
  on(AuthActions.LoginLoadedError, (state, action) => ({
    ...state,
    isLogged: false,
    error: action.error,
  })),
  on(AuthActions.RegistrationStart, (state, action) => ({
    ...state,
    email: action.email,
    isLogged: false,
  })),
  on(AuthActions.RegistrationLoadedSuccess, (state, action) => ({
    ...state,
    isLogged: true,
    token: action.token,
    error: null,
  })),
  on(AuthActions.LoginLoadedError, (state, action) => ({
    ...state,
    isLogged: false,
    error: action.error,
  })),
  on(AuthActions.meStart, (state, action) => ({
    ...state,
    email: action.email,
    isLogged: false,
  })),
  on(AuthActions.meLoadedSuccess, (state, action) => ({
    ...state,
    isLogged: true,
    user: action,
    error: null,
  })),
  on(AuthActions.meLoadedError, (state, action) => ({
    ...state,
    isLogged: false,
    error: action.error,
  }))
);
