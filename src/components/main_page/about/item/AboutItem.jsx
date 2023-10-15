import './aboutItem.css'
import { useInView } from "react-intersection-observer"


const AboutItem = ({item}) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ ref } className={`about-item ${ inView ? 'active' : '' }`}>
            <img src={ item.icon.url } alt={ item.icon.alt } className="about-item-icon" />
            <div className="about-item-desc" dangerouslySetInnerHTML={{__html: item.text}} />
        </div>
    )
}

export default AboutItem;