import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {Subject, Observable} from "rxjs";
import {NzMessageService} from 'ng-zorro-antd';
// import { Page } from '../../common/page';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]
})

export class UserComponent implements OnInit {

    username = '';

    page = {
        content : [],
        first : true,
        last : false,
        number : 1, // 第几页，后台返回从0开始
        numberOfElements : 0,
        size : 10, // 分页大小
        totalElements : 0, // 总条数
        totalPages : 0
    };

    subject = new Subject();

    constructor(private userService:UserService,
        private _message: NzMessageService) { }

    ngOnInit() {
        this.search();
    }

    search() {
        let pageReq = {
            pageNo: this.page.number,
            pageSize: this.page.size,
            param: {}
        }
        // TODO　debounce
        var obs = this.userService.queryList(pageReq).subscribe(res => {
            if (res.success) {
                this.page = res.data;
                this.page.number++;
            } else {
                this._message.create('error', res.message);
            }
            
        });
    }

    pageChange() {
        // TODO 到最后一页，然后将pageSize调大，发起多次请求
        this.search();
    }
}