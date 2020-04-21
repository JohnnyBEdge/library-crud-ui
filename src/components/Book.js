import React from 'react';

class Book extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     id: this.props.id
        // }
    //Binding these two fx bc these will be repeated on every book
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    };

    handleDelete = (e) => {
        e.preventDefault();
        const id = this.props.book._id;
        console.log(id)
        fetch(`http://localhost:5000/api/books`,{
            method: 'delete',
            body: JSON.stringify({"_id":id}),
            headers: {
                "content-type": "application/json"
            }
        }).then(this.props.getBooks);
    };

    handleEdit = (e) => {
        e.preventDefault();
        console.log('edited book')
    };

    render(){
        return(
            <div className="bookContainer">
                <h3>{this.props.book.title}</h3>
                <p>By: {this.props.book.author}</p>
                <input type="button" value="Delete" onClick={this.handleDelete} />
                <input type="button" value="Edit" onClick={this.handleEdit} />
             </div>
        );
    };
}

export default Book;