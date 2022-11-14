import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AF0C/production/_127621844_gettyimages-1244742139.jpg"
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
