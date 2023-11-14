import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-4">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>{source}</span>
          <img src={!imgurl?"https://c.ndtvimg.com/2023-08/41un2mh8_lionel-messi-pc-afp_625x300_18_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675":imgurl} className="card-img-top card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown": author } on { new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
