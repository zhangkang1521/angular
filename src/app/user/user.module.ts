import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: 'add', component: UserEditComponent },
      { path: 'edit/:id', component: UserEditComponent }
    ])
  ],
  declarations: [UserListComponent, UserEditComponent],
  providers: [ UserService ]
})
export class UserModule { }
