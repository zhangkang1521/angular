import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { IndexModule } from './index/index.module';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'hero', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [
     IndexModule, 
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}