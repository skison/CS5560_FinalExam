import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {
  baseUrl: String;

  constructor(private http: HttpClient) 
  { 
    this.baseUrl = 'http://ec2-18-188-91-211.us-east-2.compute.amazonaws.com:3000'; //hard coded to lead to my temporary AWS server w/stocks program
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl+'/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>(this.baseUrl+'/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl+'/api/user', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(this.baseUrl+`/api/user/${user._id}`);
  }

  editUser(user: User): Observable<string> {
    return this.http.put(this.baseUrl+`/api/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(this.baseUrl+`/api/user/${user._id}`, { responseType: 'text' });
  }

}
