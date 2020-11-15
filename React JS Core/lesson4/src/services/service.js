export class Service {
    _url = "http://jsonplaceholder.typicode.com";

    getUsers() {
        return fetch(`${this._url}/users`);
    }
    getPosts() {
        return fetch(`${this._url}/posts`);
    }
    getComments() {
        return fetch(`${this._url}/comments`);
    }

    getPostsWithId(id) {
        return fetch(`${this._url}/posts?userId=${id}`);
    }
    getCommentsWithId(id) {
        return fetch(`${this._url}/comments?postId=${id}`);
    }
}