export class PostServices {
    _postsUrl = 'http://jsonplaceholder.typicode.com/posts';

    async getPosts() {
        return( await fetch(this._postsUrl)).json();
    }
}