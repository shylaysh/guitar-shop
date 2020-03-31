import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="text-white py-4"
        style={{
          background: "#135547",
          fontFamily: "Cambria",
          textAlign: "center"
        }}
      >
        <h4>
          This website was designed and developed by Shailesh Khanal © 2020
        </h4>
      </footer>
    );
  }
}

export default Footer;
