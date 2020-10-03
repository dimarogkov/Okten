import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
