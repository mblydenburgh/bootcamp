import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from '../utils/API'

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  async componentDidMount(){
    // const {data} = await API.getBooks();
    // console.log(data);
    // this.setState({books:data})
    this.loadBooks();
  }

  async loadBooks(){
    const {data} = await API.getBooks();
    this.setState({books:data});
  }

  async handleClick(event){
    event.preventDefault();
    const bookTitle = event.target.form.title.value;
    const bookAuthor = event.target.form.author.value;
    const bookSynopsis = event.target.form.synopsis.value;
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      synopsis:bookSynopsis
    }
    await API.saveBook(newBook);
    // window.location.reload();
    this.loadBooks();
  }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handleClick}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
