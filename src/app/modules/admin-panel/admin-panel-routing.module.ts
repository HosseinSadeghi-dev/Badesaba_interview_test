import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "./admin-panel.component";

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
