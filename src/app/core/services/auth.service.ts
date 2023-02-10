import {Injectable} from '@angular/core';
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentialsKey = "_session";

  constructor(
    private cookieService: CookieService
  ) {
  }

  get isAuthenticated(): boolean {
    return !!this.cookieService.getCookie(this.credentialsKey);
  }

}
