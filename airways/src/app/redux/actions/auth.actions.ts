import { createAction, props } from '@ngrx/store';
import {
  LoginUser,
  RegisterUser,
  Token,
  UserRes,
} from '@redux/models/auth.models';

const LoginStart = createAction('[AUTH] Login Start', props<LoginUser>());
const LoginLoadedSuccess = createAction('[AUTH] Login Success', props<Token>());
const LoginLoadedError = createAction(
  '[AUTH] Login Error',
  props<{ error: string }>()
);

const RegistrationStart = createAction(
  '[AUTH] Registration Start',
  props<RegisterUser>()
);
const RegistrationLoadedSuccess = createAction(
  '[AUTH] Registration Success',
  props<Token>()
);
const RegistrationLoadedError = createAction(
  '[AUTH] Registration Error',
  props<{ error: string }>()
);

const meStart = createAction('[AUTH] Me Start', props<{ email: string }>());
const meLoadedSuccess = createAction('[AUTH] Me Success', props<UserRes>());
const meLoadedError = createAction(
  '[AUTH] Me Error',
  props<{ error: string }>()
);

export const AuthActions = {
  LoginStart,
  LoginLoadedSuccess,
  LoginLoadedError,
  RegistrationStart,
  RegistrationLoadedSuccess,
  RegistrationLoadedError,
  meStart,
  meLoadedSuccess,
  meLoadedError,
};
