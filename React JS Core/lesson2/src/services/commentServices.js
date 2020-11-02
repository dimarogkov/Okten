export class CommentServices {
    _commentsUrl = 'http://jsonplaceholder.typicode.com/comments';

    async getComments() {
        return( await fetch(this._commentsUrl)).json();
    }
}