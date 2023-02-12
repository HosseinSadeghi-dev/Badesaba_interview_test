import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getActions() {
    return this.httpClient.get(`/assets/json/actions.json`).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  setNewRoleAction(data: any) {
    console.log('new role', data)
  }

}
