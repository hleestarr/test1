import React from "react";
import FirstSubCom from "./FirstSubCom";


class FirstCom extends React.Component {
constructor(){
    super();
    this.state = {
        title: "01111"
    };
}
changeTitle(title){
    this.setState({title})
}
  render() {
    setTimeout(() => {this.setState({title: "test"})}, 2000) 
    return (
      <div>{this.props.title}
        <FirstSubCom title={this.state.title}/>
      </div>
    );
  }
}

export default FirstCom;