export class Services {
    _usersUrl = 'http://jsonplaceholder.typicode.com/users';
    _postsUrl = 'http://jsonplaceholder.typicode.com/posts';
    _commentsUrl = 'http://jsonplaceholder.typicode.com/comments';

    async getUsers() {
        return( await fetch(this._usersUrl)).json();
    }
    async getPosts() {
        return( await fetch(this._postsUrl)).json();
    }
    async getComments() {
        return( await fetch(this._commentsUrl)).json();
    }
}