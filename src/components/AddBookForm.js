import React from 'react';

class AddBookForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: '',
            publisher: '',
            copyright: 0,
            isbn: 0,
            genre: ''
        };

        this.handleTitle=this.handleTitle.bind(this);
        this.handleAuthor=this.handleAuthor.bind(this);
        this.handlePublisher=this.handlePublisher.bind(this);
        this.handleCopyright=this.handleCopyright.bind(this);
        this.handleIsbn=this.handleIsbn.bind(this);
        this.handleGenre=this.handleGenre.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    };

    handleTitle = (e) => {
        this.setState({title: e.target.value});
    };
    handleAuthor = (e) => {
        this.setState({author: e.target.value});
    };
    handlePublisher = (e) => {
        this.setState({publisher: e.target.value});
    };
    handleCopyright = (e) => {
        this.setState({copyright: e.target.value});
    };
    handleIsbn = (e) => {
        this.setState({isbn: e.target.value});
    };
    handleGenre = (e) => {
        this.setState({genre: e.target.value});
    };

    handleSubmit= (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:5000/api/books`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([this.state])
        }).then(this.props.getBooks)
            
    };

    render(){
        return(
            <form>
                <label>Title:</label>
                <input type="text" onChange={this.handleTitle} />

                <label>Author:</label>
                <input type="text" onChange={this.handleAuthor} />

                <label>Publisher:</label>
                <input type="text" onChange={this.handlePublisher} />

                <label>Copyright:</label>
                <input type="text" onChange={this.handleCopyright} />
                
                <label>ISBN:</label>
                <input type="text" onChange={this.handleIsbn} />

                <label>Genre:</label>
                <input type="text" onChange={this.handleGenre} />

                <button onClick={this.handleSubmit}>Add Book</button>
            </form>
        );
    };
};

export default AddBookForm;