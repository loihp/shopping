import React, { Component } from "react";
import "../sass/Home.scss";
export class Home extends Component {
  render() {
    return (
      <section>
        <div>
          Website đang trong quá trình phát triển vui lòng quay lại sau!
        </div>
        <img src="https://www.upsieutoc.com/images/2020/12/01/pexels-photo-3826678.jpg" />
        <div>
          Nếu bạn muốn test tính năng giỏ hàng vui lòng Click
          <i
            className="fas fa-hand-point-right"
            style={{ margin: "0 5px" }}
          ></i>
          <a href="/product" style={{ color: "red" }}>
            <em>vào đây</em>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
