import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { RouterModule } from '@angular/router';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [HeroListComponent, HeroEditComponent]
})
export class HeroModule { }
