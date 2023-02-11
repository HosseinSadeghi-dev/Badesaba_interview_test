import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRoleComponent} from "./add-role/add-role.component";

const routes: Routes = [
  {
    path: ':productID',
    component: AddRoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
