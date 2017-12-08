import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserService } from './components/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
