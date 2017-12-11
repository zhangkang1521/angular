import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = new User();
  
    validateForm: FormGroup;
  
  
  
    constructor(private userService:UserService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private _message: NzMessageService,
      private location: Location
      ) {
    }
  
  
    ngOnInit() {
      // 表单验证
      this.validateForm = this.fb.group({
        username: [null, [Validators.required]],
        age: [null, []],
        birthday: [null, [Validators.required]]
      });
  
      // let action = this.route.snapshot.url[1].path;
      // if (action === 'edit') {
      //   const id = +this.route.snapshot.paramMap.get('id');
      //   this.userService.findOne(id).subscribe(res => {
      //     if (res.success) {
      //       this.user = res.data;
      //     }
      //   });
      // } else if (action === 'add') {
  
      // }
  
  
    }
  
    save() {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
      }
      this.userService.save(this.user).subscribe(res => {
        if (res.success) {
          this._message.success('保存成功');
          this.location.back();
        } else {
          this._message.error(res.message);
        }
      }, err => {
        this._message.error(err.message);
      });
    }
  
    cancel() {
      this.location.back();
    }
  
    getFormControl(name) {
      return this.validateForm.controls[name];
    }

}
