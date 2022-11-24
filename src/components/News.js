import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

export class News extends Component {
  // for props value

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // capitalizeFirstLetter function

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;  // title change
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5b4fc8031cef4d51bba8791b2755a506&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  // Previous btn function

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  // Next btn function

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "40px", fontWeight:"700" }}>
            NewsMonkey - {this.capitalizeFirstLetter(this.props.category)} Top Headlines
          </h2>
          {this.state.loading && <Spinner />} {/* spinner component */}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    // title={element.title ? element.title : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    // discription={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            {/* Next btn */}

            <button
              type="button"
              style={{ marginBottom: "40px", marginTop: "40px" }}
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1} // disable btn
            >
              &larr; Previous
            </button>

            {/* Previous Btn */}

            <button
              type="button"
              style={{ marginBottom: "40px", marginTop: "40px" }}
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
console.log(Spinner);

export default News;
