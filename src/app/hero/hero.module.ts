import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { RouterModule } from '@angular/router';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HeroListComponent},
      { path: 'add', component: HeroEditComponent},
    ])
  ],
  declarations: [HeroListComponent, HeroEditComponent]
})
export class HeroModule { }
