import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import {SharedModule} from "../../../shared/shared.module";
import { SelectCategoryTreeComponent } from './add-role/components/select-category-tree/select-category-tree.component';


@NgModule({
  declarations: [
    AddRoleComponent,
    SelectCategoryTreeComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
