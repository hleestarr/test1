import React from "react";
import FirstSubSubCom from "./FirstSubSubCom";

class FirstSubCom extends React.Component {
  render() {
    return (
      <div>{this.props.title}
        <FirstSubSubCom title={this.props.title} />
      </div>
    );
  }
}

export default FirstSubCom;