import React from "react";



class Counter extends React.Component {
  // Setting the initial state of the Counter component

  constructor() {
    //what function does super trigger?
      //the parent constructor function gets triggered 
        //React.Component's constructor function

    // you need super() here to be able to establish state in this component
    super();

    //it's always this.state here 
    this.state = {
      count : 0, src: '/images/img0.png', clicks: 0,
      
    };

  }

  


  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    //one way   
      this.setState({ count: this.state.count + 1 });

  }


 
    
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
      
        <div className="card-header bg-primary text-white">
          <h2>Click Counter</h2>
          <p> {this.state.count}</p>
 
        </div>
        <div className="card-body">
          


          {/* <img src= {this.state.src} alt="img" height="275" onClick={this.handleIncrement}/> */}

          {/* <img src={image} width="100" /> */}





          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>



  


        </div>
      </div>
    );
  }
}

export default Counter;
