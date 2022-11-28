import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // for props value

  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )} - NewsMonkey`; // title change

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  // capitalizeFirstLetter function

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // // Previous btn function

  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // // Next btn function

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="container my-3">
        <h2
          className="text-center"
          style={{ margin: "40px", fontWeight: "700" }}
        >
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        {loading && <Spinner />} {/*spinner component */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
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
          </div>
        </InfiniteScroll>
        {/* Next & Previous btn */}
        {/* <div className="container d-flex justify-content-between">

            Next btn

            <button
              type="button"
              style={{ marginBottom: "40px", marginTop: "40px" }}
              className="btn btn-dark"
              onClick={handlePreviousClick}
              disabled={page <= 1} // disable btn
            >
              &larr; Previous
            </button>

            Previous Btn

            <button
              type="button"
              style={{ marginBottom: "40px", marginTop: "40px" }}
              className="btn btn-dark"
              onClick={handleNextClick}
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div> */}
      </div>
    </>
  );
};
console.log(Spinner);

export default News;
