import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/user.models';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: IUser[], ...args: string[]): any {
    let userInHttml = '';
    value.forEach(user => {
      userInHttml += `<div>
                        <p>ID - ${user.id}</p>
                        <p>Name - ${user.name}</p>
                        <p>Username - ${user.username}</p>
                        <p>Email - ${user.email}</p>
                        <hr>
                      </div>`
    })
    return userInHttml
  }

}
