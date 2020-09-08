import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { IUserModel } from '../models/user.model';

@Injectable ({
    providedIn: "root"
})

export class UserServices {
    constructor(private http:HttpClient) {}

    getUser():Observable<IUserModel[]> {
        return this.http.get<IUserModel[]>("https://jsonplaceholder.typicode.com/users");
    }
}
