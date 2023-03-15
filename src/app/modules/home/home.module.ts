import { MaterialModule } from '../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
