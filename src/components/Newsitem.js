import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.24.co.za/files/Cms/General/d/331/46ea3f6ea3ab49d3b32ab416c2a6c4b1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
