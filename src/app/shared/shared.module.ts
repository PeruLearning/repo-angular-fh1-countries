import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
