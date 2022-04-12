import { Component} from 'react';
import { Col, Card } from 'react-bootstrap'


class SingleBook extends Component{
    state={
        book:{
            asin: '1250082757',
            title: 'Born of Vengeance: The League: Nemesis Rising',
            img: 'https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg',
          
        }
    }
    render(){
        return(
            <Col xs={6} md={3} className="mb-3" key={this.state.bookbook.asin}>
                <Card className="h-100">
                    <Card.Img variant="top" src={this.state.bookbook.img} className="h-75"/>
                    <Card.Body>
                        <Card.Title className="text-truncate">{this.state.book.title}</Card.Title> 
                    </Card.Body>
                    
                </Card>
            </Col>
        )
    }
}

export default SingleBook