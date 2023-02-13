import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../core/services/category.service";
import {CategoryModel} from "../../../../core/models/category.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AccessLevel, ActionModel} from "../../../../core/models/action.model";
import {ActionService} from "../../../../core/services/action.service";
import {NotificationService} from "../../../../core/services/notification.service";

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
  paramsSubscription: Subscription = new Subscription();
  categories: CategoryModel[] = [];
  productID: string = '';
  accessesLevel = AccessLevel;
  allActions: ActionModel[] = [];
  searchedAction: string = '';


  constructor(
    public categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private actionService: ActionService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
      this.productID = params['productID']
      this.getCategories();
    })
  }

  getCategories(): void {
    this.categoryService.newRoleSelectedCategories = []
    this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
      this.categories = res.filter(f => f.productId == this.productID)
      this.getActions();
    })
  }

  getActions(): void {
    this.actionService.getActions().subscribe((res: ActionModel[]) => {

      if (this.searchedAction) {
        this.allActions = res.filter(f => f.name.toLowerCase().includes(this.searchedAction.toLowerCase()))
      } else {
        this.allActions = res
      }

      this.categoryService.newRoleSelectedCategories.forEach(category => {
        category.actions = this.allActions.filter(f => {
          if (category.selectedAccess) {
            return f.category == category.id && (f.level >= category.selectedAccess)
          } else return f.category == category.id
        })
      })

    })
  }

  setCategoryAction(category: CategoryModel): void {
    if (category.selectedAccess) {
      category.actions = this.allActions.filter(f => f.category == category.id && (+f.level >= category.selectedAccess))
    }
  }

  submitNewRole(): void {
    let selectedActions: string[] = [];
    this.categoryService.newRoleSelectedCategories.forEach(category =>
      category.actions?.forEach(action =>
        selectedActions.push(action._id)
      )
    )

    if (this.addRoleForm.controls['name'].invalid) {
      this.addRoleForm.controls['name'].markAsTouched()
      this.notificationService.error('نام نقش اجباری است')
      return
    }
    if (this.addRoleForm.controls['description'].invalid) {
      this.addRoleForm.controls['description'].markAsTouched()
      this.notificationService.error('توضیحات نقش اجباری است')
      return
    }
    if (!selectedActions?.length) {
      this.notificationService.error('انتخاب حداقل 1 دسترسی اجباری است')
      return
    } else {
      this.addRoleForm.controls['actionIds'].setValue(selectedActions)
    }

    this.actionService.setNewRoleAction(this.addRoleForm.value);
    this.addRoleForm.reset()
    this.notificationService.valid('با موفقیت ثبت شد')
    this.getCategories();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

}
