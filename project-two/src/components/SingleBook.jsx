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
                    <Card.Body>
                            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                                <h4 id="fat">@fat</h4>
                                <p>...</p>
                                <h4 id="mdo">@mdo</h4>
                                <p>...</p>
                                <h4 id="one">one</h4>
                                <p>...</p>
                                <h4 id="two">two</h4>
                                <p>...</p>
                                <h4 id="three">three</h4>
                                <p>...</p>
                            </div>

                        </Card.Body>
                    
                </Card>
            </Col>
            
            )
        }
            
    }

export default SingleBook