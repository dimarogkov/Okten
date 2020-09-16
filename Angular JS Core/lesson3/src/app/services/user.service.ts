import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) {}

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
  }
  
  getUserPostId(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
