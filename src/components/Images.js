import React from "react";
import image from "./images.json";
import Counter from "./Counter";

class Images extends React.Component {
  // Setting the initial state of the Counter component

  constructor() {
    super();

    this.state = {
      image
    };

  }

 
    
  // The render method returns the JSX that should be rendered
  render() {
    return (

      <div class="card-deck col-xl-6 mx-auto">

        {this.state.image.map(image => (
          <div class="col-lg-3">
          <div className="card shadow p-2 bg-white rounded">

            <img class="card-img" src={image.src} alt="img" onClick={this.handleIncrement} />

          </div>
          </div>
        ))}

      </div>



    );
  }
}

export default Images;
