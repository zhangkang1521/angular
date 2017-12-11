import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { IndexComponent } from './index/index.component';


const routes = [
  { path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}