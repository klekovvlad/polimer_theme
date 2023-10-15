import './productionCard.css'
import { useInView } from 'react-intersection-observer';

const ProductinCard = ({ card }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ ref } className={ `production-card ${ inView ? 'active' : '' }` }>
            { inView ? <img src={card.fimg_url} alt={card.title.rendered} className="production-card-img" /> : <div className="production-card-img"></div> }
            <div className="production-card-info">
                <h3 className="production-card-title">{ card.title.rendered }</h3>
                <p className="production-card-desc" dangerouslySetInnerHTML={{__html: card.content.rendered}} />
            </div>
        </div>
    )
}

export default ProductinCard;