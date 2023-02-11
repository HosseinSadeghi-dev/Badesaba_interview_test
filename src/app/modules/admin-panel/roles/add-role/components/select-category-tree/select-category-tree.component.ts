import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {CategoryModel} from "../../../../../../core/models/category.model";
import {removeDuplicateFromArray} from "../../../../../../core/functions/functions";
import {CategoryService} from "../../../../../../core/services/category.service";

@Component({
  selector: 'app-select-category-tree',
  templateUrl: './select-category-tree.component.html',
  styleUrls: ['./select-category-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectCategoryTreeComponent {

  @Input() categories: CategoryModel[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  selectCategory(checked: boolean, categoryID: string): void {
    if (checked) {
      const found: CategoryModel | undefined = this.categories.find(f => f.id == categoryID);
      if (found) {
        this.categoryService.newRoleSelectedCategories.push(found)
      }
      return
    }
    this.categoryService.newRoleSelectedCategories = this.categoryService.newRoleSelectedCategories.filter(f => f.id != categoryID)
  }

}
