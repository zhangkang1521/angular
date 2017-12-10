import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CrisisListComponent}
    ])
  ],
  declarations: [CrisisListComponent]
})
export class CrisisModule { }
