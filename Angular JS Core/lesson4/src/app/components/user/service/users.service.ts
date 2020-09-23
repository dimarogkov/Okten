import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUserByID(id: string): Observable<User[]> {
    return this.http.get<User[]>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
