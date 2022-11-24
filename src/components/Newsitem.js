import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className=" translate-middle badge rounded-pill bg-secondary" style={{display:'flex', alignSelf:'center', zIndex:'1'}}> {source} </span>
          <img src={ !imageUrl ? "https://img.etimg.com/thumb/msid-95591033,width-1070,height-580,imgsize-45264,overlay-etmarkets/photo.jpg" : imageUrl}className="card-img-top"alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{discription} ...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              // rel="noreferre"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
