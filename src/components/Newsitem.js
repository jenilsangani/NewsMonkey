import React, { Component } from "react";

export class Newsitem extends Component {
  articles = [
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "Herman Mostert",
        "title": "Knights quickie earns Proteas Test call-up for Australia series",
        "description": "Cricket South Africa has announced a 16-man Test squad for the Proteas' upcoming tour of Australia.",
        "url": "https://www.news24.com/sport/cricket/proteas/knights-quickie-earns-proteas-test-call-up-for-australia-series-20221114",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/331/46ea3f6ea3ab49d3b32ab416c2a6c4b1.jpg",
        "publishedAt": "2022-11-14T09:54:14+00:00",
        "content": "Cricket South Africa (CSA) on Monday announced a 16-man Test squad for the Proteas' upcoming tour of Australia.\r\nThe Proteas will play three Tests against the Baggy Greens, with the first match sched… [+2948 chars]"
    },
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "'England great Stokes should reconsider ODI future'",
        "description": "Ben Stokes showed again he is England great in the T20 World Cup final and now should consider reversing his retirement from 50-over cricket, says Jonathan Agnew.",
        "url": "http://www.bbc.co.uk/sport/cricket/63616167",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AF0C/production/_127621844_gettyimages-1244742139.jpg",
        "publishedAt": "2022-11-14T07:37:17.8271469Z",
        "content": "Ben Stokes was already an England great before securing their T20 World Cup victory on Sunday.\r\nHis performances in the 2019 World Cup final and his famous Test-winning innings at Headingley later th… [+5013 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor() {
    super();
    console.log("hellow i m constructor from news components");
    this.state = {
      articles : this.articles,
      loading:false
    }
  }
  render() {
    let { title, discription, imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
