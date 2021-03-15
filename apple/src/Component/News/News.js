import React, { useEffect, useState} from 'react';
import "./News.css"

function News() {

const [latestnews, addnews]= useState([]);

useEffect(()=>{

fetch(
    "https://newsapi.org/v2/everything?q=Apple company&language=en&sortBy=publishedAt&pageSize=6&apiKey=c19d72609340476eb6da0926aa7f56bd"
)
.then((response) => response.json())
.then((data) => {
    const article= data.articles
    addnews(article);
})
}, []);
    return (
        <div className="allnewswrapper">
            <div className="container">
            <div className="row justify-content-center text-center">
            <div className="col-12">
           <div className="title-wraper">
              Latest Apple News <br />
              <br />
            </div>
            </div>


{latestnews.map((art) =>{
   let newsWrapper = (
    <div key={art} className="col-sm-12 col-md-6 col-lg-4">
        <div className="singlenewsWrapper">
                  <div className="newsThumbnail">
                    <a href={art.url} target="_blank">
                      <img src={art.urlToImage} />
                    </a>
                  </div>
                  </div>
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={art.url} target="_blank">
                        {art.title}
                      </a>
                    </div>
                  </div>

</div>
);
 return newsWrapper;
})}













            </div>
            </div>
        </div>
    )
}

export default News