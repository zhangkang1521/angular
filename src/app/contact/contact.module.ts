import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactHighlightDirective } from './contact-highlight.directive';
import { AwesomePipe } from './awesome.pipe';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    // BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'contact', component: ContactComponent}
    ])
  ],
  declarations: [
    ContactComponent,
    ContactHighlightDirective,
    AwesomePipe
  ],
  providers: [
    ContactService
  ],
  exports: [
    // ContactComponent
  ]
})
export class ContactModule { }
