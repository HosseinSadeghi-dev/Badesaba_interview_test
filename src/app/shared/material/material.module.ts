import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatRadioModule} from "@angular/material/radio";

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSelectModule,
  MatRadioModule,
  MatListModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatButtonToggleModule
]

/**
 * add material modules to angular.
 */
@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  declarations: [],
  exports: [
    materialModules
  ]
})
export class MaterialModule {
}
