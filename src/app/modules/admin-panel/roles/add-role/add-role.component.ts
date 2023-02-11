import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../core/services/category.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {ActivatedRoute} from "@angular/router";
import {debounceTime, Observable, of, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRoleComponent implements OnInit, OnDestroy {

  addRoleForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    active: new FormControl(true, Validators.required),
    actionIds: new FormControl([], Validators.required),
  });
  defaultCategories: CategoryModel[] = [];
  categories: CategoryModel[] = [];
  productID: string = '';
  paramsSubscription: Subscription = new Subscription();


  constructor(
    public categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
      this.productID = params['productID']
      this.categoryService.newRoleSelectedCategories = []
      this.getCategories()
    })
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
      this.categories = this.defaultCategories = res.filter(f => f.productId == this.productID)
    })
  }

  searchCategories(searchText: string): void {
    // this.categories = this.defaultCategories.filter(f => {
    //   if (
    //     f.name.toLowerCase().includes(searchText.toLowerCase()) ||
    //     f.children.filter(f.name)
    //   ) return true
    // })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

}
