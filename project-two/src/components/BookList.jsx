// import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import books from "../data/Books.json"
import SingleBook from "./SingleBook";

// class BookList extends Component{
//     render(){
//         return(
//             <Container>
//                 <Row>
//                     {
//                         books.map(book=>(<SingleBook key={book.asin} book={book}/> ))
//                     }
//                 </Row>
//             </Container>
//         )
//     }
        
// }

const BookList = () =>(
    <Container>
        <Row>
            {
            books.map(book=>(
            <SingleBook key={book.asin} book={book}/> 
            ))
            }
        </Row>
    </Container>
)



export default BookList