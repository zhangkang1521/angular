import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:9999/spring-boot/user/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private files;

  constructor(private http: HttpClient
   ) { }

  ngOnInit() {

  }

  filechange(event) {
    console.log(event);
    this.files = event.srcElement.files;
  }
 
  submit(t) {
      let formData: FormData = new FormData();
      formData.append("username", "zk");
      formData.append('myFile', this.files[0]);
      this.http.post('http://localhost:9999/spring-boot/user/upload2', formData).subscribe(res => {
        console.log(res);
      });
    }

}
