import React from 'react';
import AddBookForm from './AddBookForm'

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    getBooks(){
        fetch('http://localhost:5000/api/books')
        .then(response => response.json())
        .then(data => this.setState({books:data}, () => console.log(this.state.books))) 
    };

    componentDidMount(){
        this.getBooks();
    };

    render(){

        const book = this.state.books.map(book =>
            <ul>
                <li>{book.title}</li>
            </ul>
        );

        return(
            <>
                <AddBookForm />
                {book}
            </>
            
        );
    };
};

export default Books