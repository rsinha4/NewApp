import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from 'prop-types'


export class News extends Component {

static defaultProps = { 
  country: 'in',
  pageSize: 6,
  category: 'general',
}

static propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
}  
 
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Jeanne Whalen",
      "title": "Biden urges Detroit automakers, union to forge deal as deadline looms - The Washington Post",
      "description": "Tense contract talks could lead to strikes if progress isn’t made before a Sept. 14 deadline, the United Auto Workers has warned.",
      "url": "https://www.washingtonpost.com/business/2023/08/14/biden-uaw-negotiations/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BTEX3AXRJBEKHIVWW5GJXSNLYY.jpg&w=1440",
      "publishedAt": "2023-08-14T18:26:29Z",
      "content": "Comment on this story\r\nComment\r\nOne month before a deadline that could turn contentious automotive contract talks into strikes, President Biden urged Detroits Big Three car companies and the United A… [+3142 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Dakin Andone",
      "title": "6 ex-officers, some of whom called themselves ‘The Goon Squad,’ plead guilty to state charges in torture of 2 Black men - CNN",
      "description": "Six former Mississippi law enforcement officers pleaded guilty Monday to state charges stemming from the torture and abuse of two Black men earlier this year.",
      "url": "https://www.cnn.com/2023/08/14/us/mississippi-goon-squad-cops-guilty-plea/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230814111608-mississippi-goon-squad-cops-guilty-split.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-14T18:26:00Z",
      "content": "Six former Mississippi law enforcement officers pleaded guilty Monday to all state charges against them stemming from the torture and abuse this year of two Black men, one of whom was shot in the mou… [+6629 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Kate Selig",
      "title": "Judge rules in favor of Montana youths in landmark climate decision - The Washington Post",
      "description": "“This is a monumental decision,\" said a lawyer for the young plaintiffs, and could influence similar cases in other states.",
      "url": "https://www.washingtonpost.com/climate-environment/2023/08/14/youths-win-montana-climate-trial/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YSKSKHIBJQOBTE7DIU6KBNCD7Q.jpg&w=1440",
      "publishedAt": "2023-08-14T18:17:53Z",
      "content": "Comment on this story\r\nComment\r\nIn the first ruling of its kind nationwide, a Montana state court decided Monday in favor of young people who alleged the state violated their right to a clean and hea… [+4620 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Tesla cuts prices in China for select Model Y versions - Reuters",
      "description": "Tesla <a href=\"https://www.reuters.com/markets/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> on Monday said it has cut prices in China for its Model Y long-range and performance versions starting on Aug. 14, sending its shares lower on concern of further pre…",
      "url": "https://www.reuters.com/business/autos-transportation/tesla-cuts-prices-china-some-model-y-versions-2023-08-14/",
      "urlToImage": "https://www.reuters.com/resizer/n1Q_hhMgLVbiyV1-zkRB7zMLKcg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZURTON6MUROLHCRT4QVPAIWPT4.jpg",
      "publishedAt": "2023-08-14T18:14:00Z",
      "content": "BEIJING, Aug 14 (Reuters) - Tesla (TSLA.O) on Monday said it has cut prices in China for its Model Y long-range and performance versions starting on Aug. 14, sending its shares lower on concern of fu… [+2639 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Rachel Meltzer Warren",
      "title": "Uncured bacon isn't any healthier. Here's why. - The Washington Post - The Washington Post",
      "description": "Little practical difference exists between cured and uncured bacon in terms of health. Both are cured in the true sense of the word, meaning they are preserved.",
      "url": "https://www.washingtonpost.com/wellness/2023/08/14/uncured-bacon-health-nitrites/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AGK25T6EBZAQE3452YASAXDPOM.jpg&w=1440",
      "publishedAt": "2023-08-14T18:06:22Z",
      "content": "Comment on this story\r\nComment\r\nConsumer Reports has no financial relationship with any advertisers on this site.\r\nIts reasonable enough to assume that uncured bacon, with labels touting no nitrates … [+5238 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Georgia court website briefly publishes, removes document about potential Trump charges - Reuters",
      "description": "The Fulton County, Georgia, <a href=\"https://fingfx.thomsonreuters.com/gfx/legaldocs/gdpzwwwqyvw/Details.pdf\" target=\"_blank\">court's website briefly posted a document</a> on Monday listing several criminal charges against former U.S. President Donald Trump t…",
      "url": "https://www.reuters.com/legal/us-state-georgia-appears-set-file-charges-against-donald-trump-court-document-2023-08-14/",
      "urlToImage": "https://www.reuters.com/resizer/WI5VrWhnC84Vu1nVVB4STm8FFFA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TOAYA45SVFLRLOO4KNJ5YNPC4Q.jpg",
      "publishedAt": "2023-08-14T17:34:00Z",
      "content": "Aug 14 (Reuters) - The Fulton County, Georgia, court's website briefly posted a document on Monday listing several criminal charges against former U.S. President Donald Trump that appeared related to… [+1685 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Guardian staff reporter",
      "title": "Hawaii fires: tourists warned against travelling to Maui in wake of disaster - The Guardian US",
      "description": "Officials say hotel rooms needed to house thousands of displaced residents",
      "url": "https://www.theguardian.com/us-news/2023/aug/14/maui-fires-hawaii-tourists-hotel-fire-evacuation-wildfires",
      "urlToImage": "https://i.guim.co.uk/img/media/17c66ef777ef10fe6ced0314e8cd1436a5976f8c/0_339_5088_3053/master/5088.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9aa1128eb84498d9d7dda4ffd388b1f5",
      "publishedAt": "2023-08-14T17:29:00Z",
      "content": "Officials in Hawaii have urged tourists to avoid traveling to Maui, as many hotels prepared to house evacuees and first responders on the island after wildfires killed more than 90 people and destroy… [+3917 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "SAM MEDNICK",
      "title": "Niger's coup leaders say they will prosecute deposed President Mohamed Bazoum for 'high treason' - The Associated Press",
      "description": "The military junta that seized power in Niger says it plans to prosecute deposed President Mohamed Bazoum for “high treason” and undermining state security. The announcement came after the mutinous officers said they were open to dialogue with West African na…",
      "url": "https://apnews.com/article/niger-coup-leaders-president-bazoum-treason-1e54fa565ec0c659fc233cc695d7de21",
      "urlToImage": "https://dims.apnews.com/dims4/default/9f2f0c5/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff7%2F4f%2F32c0301c2050de07f26e567bd26b%2F6992d663d88047d4ac98337d98df92c6",
      "publishedAt": "2023-08-14T17:06:00Z",
      "content": "NIAMEY, Niger (AP) The military junta that seized power in Niger said it plans to prosecute deposed President Mohamed Bazoum for high treason and undermining state security, an announcement that came… [+7160 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jay Peters",
      "title": "Netflix finally streams video games, too - The Verge",
      "description": "The future of Netflix games may be televised.",
      "url": "https://www.theverge.com/2023/8/14/23829262/netflix-cloud-gaming-testing-tv-web",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/zLGvEWb_VHJfrlSrcC5J6dCQj_4=/0x0:1886x849/1200x628/filters:focal(686x492:687x493)/cdn.vox-cdn.com/uploads/chorus_asset/file/24849981/ss_4c3b72bb9925f3156e17ec2b2cb7121c5af2e85c.jpg",
      "publishedAt": "2023-08-14T17:00:00Z",
      "content": "Netflix finally streams video games, too\r\nNetflix finally streams video games, too\r\n / Netflixs first cloud gaming test announces the arrival of the real Netflix of games.\r\nByJay Peters, a news edito… [+2992 chars]"
    }
  ]
  
  capitalizeFirstLetter=(str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loadings: false,  
      page: 1
    }
    document.title= `NewsMonkey- ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  //Using Fetch API to load articles

  async componentDidMount() {
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd6792fa65c34744bea1a5b4c699b32e&page=1&pagesize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles});
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

  }

  handlePrevClick= async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd6792fa65c34744bea1a5b4c699b32e&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({   
      page: this.state.page -1,
      articles: parsedData.articles,
      loading:false
  })

  }

  handleNextClick= async()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd6792fa65c34744bea1a5b4c699b32e&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({   
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
} 

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'40px'}}>News Monkey- Latest {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key="{element.url}">
                <NewsItems title={element.title}  description={element.description?element.description.slice(0,80):""} 
                imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  />
              </div>
          })} 
        </div>  
        <div className="container d-flex justify-content-around">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &laquo; Previous </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News;
