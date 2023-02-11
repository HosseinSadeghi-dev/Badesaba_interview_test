import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";
import {CategoryModel} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  newRoleSelectedCategories: CategoryModel[] = []

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCategories() {
    return this.httpClient.get(`/assets/json/categoriesTree.json`).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

}
