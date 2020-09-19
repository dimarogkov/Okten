import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
