export class Service {
    _url = "https://jsonplaceholder.typicode.com"

    getUsers() {
        return fetch(`${this._url}/users`);
    }
}