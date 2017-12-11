import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';


const routes = [
    { path: '', component: HeroListComponent},
    { path: 'add', component: HeroEditComponent},
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroRoutingModule {}