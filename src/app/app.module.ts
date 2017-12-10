import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactHighlightDirective } from './contact/contact-highlight.directive';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactService } from './contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    ContactComponent,
    ContactHighlightDirective,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
