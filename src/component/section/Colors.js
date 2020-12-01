import React, { Component } from "react";

export class Colors extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div className="colors">
        {colors.map((color, ind) => (
          <button style={{ background: color }} key={ind}></button>
        ))}
      </div>
    );
  }
}

export default Colors;
