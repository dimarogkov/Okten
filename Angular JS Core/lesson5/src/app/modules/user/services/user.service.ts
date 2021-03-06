import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) {}

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
  }
}
