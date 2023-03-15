import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_COMPONENTS = [
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS
  ],
  exports: [
    MATERIAL_COMPONENTS
  ]
})
export class MaterialModule { }
