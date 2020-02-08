import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
const titleStyle = {
  color: "rgb(255, 100, 150)",
  fontSize: "2em",
  fontWight: "bold"
};

class MovieCardComponent extends Component {
  state = {
    placeholderImage: "https://dummyimage.com/640x360/fff/aaa"
  };
  render() {
    return (
      <Card className="col-6">
        <CardTitle style={titleStyle}>{this.props.title}</CardTitle>
        <CardImg
          top
          height='30%'
          width="100%"
          src={
            this.props.image ? this.props.image : this.state.placeholderImage
          }
          alt="Card image cap"
        />
        <CardBody>
          <CardText>{this.props.sinopsis}</CardText>
          <div className="row">
            <div className='col-4'>
              Year:
              <span className="badge badge-dark">{this.props.year}</span>
            </div>
            <div className='col-4'>
            Duration: <span className="badge badge-warning">{this.props.duration}</span>
            </div>
            <div className='col-4'>
              Genre: <span className="badge badge-info">{this.props.genre}</span>
            </div>
          </div>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}

export default MovieCardComponent;
