import { Col, Card } from 'react-bootstrap'
import { Component } from 'react'

// const SingleBook = ({book}) =>
// (
// <Col xs={6} md={3} className="mb-3">
//                 <Card className="h-100" key={book.asin}>
//                     <Card.Img variant="top" src={book.img} className="h-75"/>
//                     <Card.Body>
//                         <Card.Title className="text-truncate">{book.title}</Card.Title> 
//                     </Card.Body>
                    
//                 </Card>
//             </Col>
// )

class SingleBook extends Component{
    render(){
        return(
            <Col xs={6} md={3} className="mb-3">
                <Card className="h-100" key={this.props.book.asin}>
                    <Card.Img variant="top" src={this.props.book.img} className="h-75"/>
                    <Card.Body>
                        <Card.Title className="text-truncate">{this.props.book.title}</Card.Title> 
                    </Card.Body>
                    
                </Card>
            </Col>
            
            )
        }
            
    }

export default SingleBook