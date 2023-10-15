import './aboutProductionCard.css'
import { useInView } from 'react-intersection-observer'

const AboutProductionCard = ( { card } ) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ ref } className={ `about-production-card ${ inView ? 'active' : '' }` }>
            <div className="about-production-card-title">{ card.title }</div>
            <div className="about-production-card-desc">{ card.desc }</div>
        </div>
    )
}

export default AboutProductionCard