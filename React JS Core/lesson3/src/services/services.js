export class Services {
    _userLink = 'http://jsonplaceholder.typicode.com/users';

    async getUsers() {
        return (await fetch(this._userLink)).json();
    }
}
