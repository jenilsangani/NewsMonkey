import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    // console.log("hellow i am a constructor from news components");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd0c45153a45406792f95f41b022afc9&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  // Previous btn function

  handlePreviousClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd0c45153a45406792f95f41b022afc9&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  // Next btn function

  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd0c45153a45406792f95f41b022afc9&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsMonkey - Top Headlines</h2>
          <Spinner/> {/*spinner component */}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    // title={element.title?element.title.slice(0, 45):""}
                    title={element.title ? element.title : ""}
                    discription={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            {/* Next btn */}

            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1} // disable btn
            >
              &larr; Previous
            </button>

            {/* Previous Btn */}

            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
// console.log(spinner);


export default News;
