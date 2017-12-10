import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app';

  constructor(private userService:UserService) {
    
  }

  test() {
    this.userService.userName = "app changed";
  }


}
