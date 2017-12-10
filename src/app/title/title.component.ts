import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  // providers: [UserService]
})
export class TitleComponent implements OnInit {
  
  title = 'Angular Modules';
  user;

  constructor(private userService:UserService) { }

  ngOnInit() {
    console.log(this.userService);
    this.user = this.userService.userName;
  }

}
