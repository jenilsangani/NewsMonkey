import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
            <Newsitem
              title="my tittle"
              discription="my desc"
              imageUrl="https://cdn.24.co.za/files/Cms/General/d/331/46ea3f6ea3ab49d3b32ab416c2a6c4b1.jpg"
            />
          </div>

          <div className="col-md-3">
            <Newsitem title="my tittle" discription="my desc" />
          </div>

          <div className="col-md-3">
            <Newsitem title="my tittle" discription="my desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
