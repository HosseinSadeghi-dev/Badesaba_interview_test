import {Injectable} from '@angular/core';
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentialsKey = "_BadeSabaSession";

  constructor(
    private cookieService: CookieService
  ) {
  }

  get isAuthenticated(): boolean {
    return !!this.cookieService.getCookie(this.credentialsKey);
  }

  login(username: string, password: string): boolean {
    if (username == '09382024302' && password == '123456') {
      this.cookieService.setCookie(this.credentialsKey, 'TOKEN', 1)
      return true
    }
    return false
  }

  logout(): void {
    this.cookieService.deleteCookie(this.credentialsKey)
  }

}
