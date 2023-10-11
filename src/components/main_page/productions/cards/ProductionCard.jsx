import './productionCard.css'

const ProductinCard = ({ card }) => {

    return (
        <div className="production-card">
            <img src={card.fimg_url} alt={card.title.rendered} className="production-card-img" />
            <div className="production-card-info">
                <h3 className="production-card-title">{ card.title.rendered }</h3>
                <p className="production-card-desc" dangerouslySetInnerHTML={{__html: card.content.rendered}} />
            </div>
        </div>
    )
}

export default ProductinCard;