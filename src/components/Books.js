import React from 'react';
import AddBookForm from './AddBookForm'
import Book from './Book';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
        this.getBooks = this.getBooks.bind(this);
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
            
            <li key={book._id}><Book book={book} getBooks={this.getBooks} /></li>
            
        );

        return(
            <>
                <AddBookForm refresh={this.getBooks}/>
                <ul>
                    {book}
                </ul>

            </>
            
        );
    };
};

export default Books