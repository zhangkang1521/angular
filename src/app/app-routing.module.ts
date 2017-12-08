import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user/add', component: UserEditComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user', component: UserComponent }
  
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}