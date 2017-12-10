import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactHighlightDirective } from './contact/contact-highlight.directive';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './hero/hero.module';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
