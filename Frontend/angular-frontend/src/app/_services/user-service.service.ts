import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  IUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('/api/users')
  }

  constructor(private http : HttpClient) { }

  getData(): Observable<IUser[]>{
    return this.http.get<IUser[]>('/api/users')
  }
  

  // getFormations(): Observable<User[]> {
  //   const users = of(USERS);
  //   this.messageService.add('UserService: fetched formations');
  //   return users;
  // }
}
