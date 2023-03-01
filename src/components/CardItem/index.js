import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="imgUrl" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
