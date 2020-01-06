import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class RRCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }
  
    componentDidMount() {
        fetch('./api/products.json')
          .then(response => response.json())
          .then(data => this.setState({ groups: data.groups }));
    }

  

    render() {
        const { groups } = this.state;

        return (
                    
            <Carousel>

                <div>
                {groups.map(datum =>
                      <div>HERE: {datum.name}</div>
                    )}
                </div>
                <div>
                    <img src="assets/1.jpeg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<RRCarousel />, document.querySelector('#root'));

export default RRCarousel;