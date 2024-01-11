// rcc

// Component
import { Component } from "react";

// CLASS MyClassComponent
class MyClassComponent extends Component {
  // Display
  static displayName = "Miuul Class Component";

  // Constructor
  constructor(props) {
    super(props);

    console.log("constructor");

    // Initialize
    this.state = {
      count: 0,
    };

    //BIND
    this.miuulIncrease = this.miuulIncrease.bind(this);
    this.miuulDecrease = this.miuulDecrease.bind(this);
    this.miuulReset = this.miuulReset.bind(this);
  } //end construct

  // ComponentDidMount (cdm)
  componentDidMount() {
    console.log("componentDidMount");
  } //end componentDidMount

  // FUNCTION
  // ARTIR
  miuulIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    })); //end setState
  }; //end handleClick

  // AZALT
  miuulDecrease = () => {
    if (this.state.count <= 0) {
      alert("Sıfırdan Küçük sayamam !!!");
      return;
    } else {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      })); //end setState
    }
  }; //end handleClick

  // SIFIRLA
  miuulReset = () => {
    this.setState((prevState) => ({
      count: 0,
    })); //end setState
  }; //end handleClick

  // RENDER
  render() {
    // Object Desctructing
    const { count } = this.state;
    const { companyName,data } = this.props;

    // RETURN
    return (
      <>
        <div className="container ms-5">
          <h1> {companyName}  {data}</h1>
          {/* <p className="display-6">{this.state.count}</p> */}
          <p className="display-6 ms-5">{count}</p>

          <button className="btn btn-primary me-2" onClick={this.miuulIncrease}>
            Artır
          </button>

          <button className="btn btn-danger me-2" onClick={this.miuulDecrease}>
            Azalt
          </button>

          <button className="btn btn-warning me-2" onClick={this.miuulReset}>
            Sıfırla
          </button>
        </div>
      </>
    );
  }
} // end class MyClassComponent


//EXPORT
export default MyClassComponent;

// DEfault PRops
MyClassComponent.defaultProps = {
    data:"Class Component"
}
