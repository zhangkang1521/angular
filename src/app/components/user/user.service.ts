import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    queryList(pageReq:any):Observable<any> {
        return this.httpClient.post('http://localhost:9999/spring-boot/user/search', pageReq);
    }

    findOne(id:any):Observable<any> {
        return this.httpClient.get(`http://localhost:9999/spring-boot/user/${id}`);
    }

    save(user:any):Observable<any> {
        return this.httpClient.post(`http://localhost:9999/spring-boot/user`, user);
    }

    delete(id:any):Observable<any> {
        return this.httpClient.delete(`http://localhost:9999/spring-boot/user/${id}`);
    }


}