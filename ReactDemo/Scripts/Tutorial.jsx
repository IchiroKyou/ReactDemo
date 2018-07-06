class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        console.log("CommentBox props data:" + this.props.data);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments:</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
}

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        console.log("CommentList props data:" + this.props.data);
    }

    renderComment(comment) {
        let key = comment.id;
        let author = comment.Author;
        let text = comment.Text;
        console.log(`Render comment: id:${key} author:${author} text:${text}`);

        return (
            <Comment key={key} author={author}>
                {text}
            </Comment >
        );
    }

    render() {
        console.log("Inside CommentList render.");

        const commentNodes = this.props.data.map(comment => this.renderComment(comment));

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        console.log("CommentForm props data:" + this.props.data);
    }

    render() {
        return (
            <div className="commentForm">
                I'm a comment form.
            </div>
        );
    }
}

class Comment extends React.Component {

    constructor(props) {
        super(props);
        console.log("Comment props data:" + this.props.data);
    }

    rawMarkup() {
        console.log(this.props);

        const md = new Remarkable();
        const markUp = md.render(this.props.children.toString());

        return { __html: markUp };
    }

    render() {
        console.log(this.props.data);

        return (
            <div className="comment">
                <h2 className="classAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }

}

function httpGetAsync(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            return xmlHttp.responseText;
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function fetchDataAsync() {
    return httpGetAsync("/comments");
}

const data = [
    { id: 1, Author: "Agatha Christie", Text: "This is a comment!" },
    { id: 2, Author: "John Doe", Text: "Another comment from JD" },
    { id: 3, Author: "Ruth Mittens", Text: "*Another* comment..." }
];

var data2 = fetchDataAsync();

ReactDOM.render(
    <CommentBox data={data2} />,
    document.getElementById("content")
);