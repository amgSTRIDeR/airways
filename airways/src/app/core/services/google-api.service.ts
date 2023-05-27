import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '1096837691640-ftj9u3482p1mh626mbu8trq5e8nondr7.apps.googleusercontent.com',
  scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
  showDebugInformation: true,
};

export interface UserInfo {
  info: {
    email: string;
    given_name: string;
    family_name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com';

  userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(authCodeFlowConfig);
  }

  public login() {
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo);
          });
        }
      });
    });
  }

  public getUserData() {
    this.oAuthService.loadUserProfile().then((userProfile) => {
      this.userProfileSubject.next(userProfile as UserInfo);
    });
  }
}
