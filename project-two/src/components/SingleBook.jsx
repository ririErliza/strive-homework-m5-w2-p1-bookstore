import { Col, Card } from 'react-bootstrap'
import { Component } from 'react'




class SingleBook extends Component{
    state = {
        display: false,
      }
 
    render(){
        return(
            <Col xs={6} md={3} className="mb-3">
                <Card
                    key={this.props.book.asin}
                    className={ this.state.display ? "h-100 BorderOn" : "h-100 BorderOff" }
                    onClick={() => this.setState({display: !this.state.display})}>

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