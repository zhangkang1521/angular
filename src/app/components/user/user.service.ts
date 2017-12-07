import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    queryList(pageReq:any):Observable<any> {
        return this.httpClient.post('http://localhost:9999/spring-boot/user/list', pageReq);
    }
}