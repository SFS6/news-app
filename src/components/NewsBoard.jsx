import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [articles,setarticles]=useState([])
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8f8275a3dd2643fc9b33c5da9dab44ae`
        fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
    },[category])
  return(
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger"> News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage}
                url={news.url}
            />
        })}
    </div>
  )
}

export default NewsBoard