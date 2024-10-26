import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  name : string,
  email : string,
  phonenumber : number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User> {

    const headers2 = new HttpHeaders({
      "content-type":"application/json",
      "authenticationtoken" : "1234521678"
    });

    const params2 = new HttpParams()
    .set('pageNum' , '12')
    .set('pageSize' , '100')

    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{headers:headers2,params:params2})
  }

}
