import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Zach Kruse",
      title:
        "Packers coach Matt LaFleur explains decisions to cut Amari Rodgers, Kylin Hill - Packers Wire",
      description:
        "The Packers coach discussed the process behind cutting Amari Rodgers and Kylin Hill. One was production-based. The other was a failure of expectations within a role.",
      url: "https://packerswire.usatoday.com/2022/11/15/packers-coach-matt-lafleur-explains-decisions-to-cut-amari-rodgers-kylin-hill/",
      urlToImage:
        "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2022/09/105cb9c9f1f2421492af3d47f4983061.jpg?w=1024&h=576&crop=1",
      publishedAt: "2022-11-16T00:16:00Z",
      content:
        "The individual decisions to release wide receiver Amari Rodgers and running back Kylin Hill were made because of two separate factors: on-field performance and buying in off the field.\r\nCoach Matt La… [+2281 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "'England great Stokes should reconsider ODI future'",
      description:
        "Ben Stokes showed again he is England great in the T20 World Cup final and now should consider reversing his retirement from 50-over cricket, says Jonathan Agnew.",
      url: "http://www.bbc.co.uk/sport/cricket/63616167",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AF0C/production/_127621844_gettyimages-1244742139.jpg",
      publishedAt: "2022-11-14T07:37:17.8271469Z",
      content:
        "Ben Stokes was already an England great before securing their T20 World Cup victory on Sunday.\r\nHis performances in the 2019 World Cup final and his famous Test-winning innings at Headingley later th… [+5013 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hellow i am a constructor from news components");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fd0c45153a45406792f95f41b022afc9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
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
      </div>
    );
  }
}

export default News;
