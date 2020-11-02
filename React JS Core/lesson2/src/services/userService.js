export class UserServices {
    _usersUrl = 'http://jsonplaceholder.typicode.com/users';

    async getUsers() {
        return( await fetch(this._usersUrl)).json();
    }
}