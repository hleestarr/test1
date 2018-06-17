import React from "react";

class CheckBox extends React.Component {
    constructor() {
        super();
        this.state = {
          checked: true
        };
      }
  msg ={string: ""}; 
  doCheck(checked) {
    this.setState({checked: !this.state.checked})
  }
  render() {
    //  setTimeout(() => {this.setState({checked: !this.state.checked})}, 1000)    
    if(this.state.checked)
        this.msg = 'checked'
    else
        this.msg = 'unchecked'

    return (
       <div>
          <h3>CheckBox is {this.msg}</h3>
          <input type="checkbox" onChange={this.doCheck.bind(this)} checked={this.state.checked} />
      </div>
    );
  }
}

export default CheckBox;