import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  valid(message: string, action?: string, duration?: number) {
    this.snackBar.open(
      message,
      action,
      {
        duration: duration || 2000,
        direction: 'rtl',
        horizontalPosition: 'right',
        panelClass: 'validSnackBar'
      }
    );
  }

  error(message: string, action?: string, duration?: number) {
    this.snackBar.open(
      message,
      action,
      {
        duration: duration || 2500,
        direction: 'rtl',
        horizontalPosition: 'right',
        panelClass: 'errorSnackBar'
      }
    );
  }

  warning(message: string, action?: string, duration?: number) {
    this.snackBar.open(
      message,
      action,
      {
        duration: duration || 2500,
        direction: 'rtl',
        horizontalPosition: 'right',
        panelClass: 'warningSnackBar'
      }
    );
  }


}
