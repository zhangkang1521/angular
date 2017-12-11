import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserEditComponent },
  { path: 'edit/:id', component: UserEditComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}