import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../core/services/notification.service";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      this.notificationService.error('لطفا نام کاربری و رمز عبور را وارد کنید')
      return
    }

    if (this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    )) {
      this.router.navigate(['/admin']).then(() => {
        this.notificationService.valid('خوش آمدید')
      })
    } else {
      this.notificationService.error('نام کاربری یا رمز عبور اشتباه است')
    }
  }


}
