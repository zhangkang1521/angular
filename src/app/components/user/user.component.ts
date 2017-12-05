import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    data = [
        {
          key    : '1',
          name   : 'John Brown',
          age    : 12,
          address: 'New York No. 1 Lake Park',
        }, {
          key    : '2',
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park',
        }, {
          key    : '3',
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park',
        }
      ];

    constructor() { }

    ngOnInit() {
    }
}