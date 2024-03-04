import abzu from '../assets/images.png'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{maxWidth:"345px"}}>
    <img src={src?src:abzu}  className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Today's headlines Will be...."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem