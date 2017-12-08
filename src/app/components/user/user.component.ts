import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {Subject, Observable} from "rxjs";
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import { UserParam } from './user';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]
})

export class UserComponent implements OnInit {
    
    _isLoading = false; // 分页数据是否加载中
    _pageIndex = 1; // 页码，从1开始
    _pageSize = 10; // 分页大小

    _content = [];     // 列表数据
    _totalElements = 0; // 总条数

    _allChecked = false; // 是否全部选中



    userParam: UserParam = new UserParam();

    disabledButton = true;

    constructor(private userService:UserService,
        private _message: NzMessageService,
        private confirmServ: NzModalService) { }

    ngOnInit() {
        // this.search();
    }

    search(pageIndex?) {
        if (pageIndex) {
            this._pageIndex = pageIndex;
        }
        let pageReq = {
            pageNo: this._pageIndex,
            pageSize: this._pageSize,
            param: this.userParam
        }
        // TODO　debounce
        this._isLoading = true;
        var obs = this.userService.queryList(pageReq).subscribe(res => {
            if (res.success) {
                let data = res.data;
                this._totalElements = data.totalElements;
                this._content = data.content;
                this._refreshStatus();
               
            } else {
                this._message.create('error', res.message);
            }
            this._isLoading = false;
        }, err => {
            this._isLoading = false;
            this._message.create('error', err.message);
            console.log(err);
        });
    }

    pageChange($event?) {
        this.search($event);
    }

    delete() {
        let ids = this._content
        .filter(data => data.checked === true)
        .map(data => data.id);
        this.confirmServ.confirm({
            content: '确定要删除',
            showConfirmLoading: true,
            onOk() {
              console.log(ids);
            },
            onCancel() {
            }
          });
    }

    doDelete(ids) {
        console.log(ids);
    }

    
    _refreshStatus() {
        const allChecked = this._content.every(value => value.checked === true);
        const allUnChecked = this._content.every(value => !value.checked);
        this._allChecked = allChecked;
        this.disabledButton = !this._content.some(value => value.checked);
    }

    _checkAll(value) {
        if (value) {
            this._content.forEach(data => {
                data.checked = true;
            });
        } else {
            this._content.forEach(data => {
                data.checked = false;
            });
        }
        this._refreshStatus();
    }
}