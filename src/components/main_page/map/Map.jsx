import { useInView } from "react-intersection-observer"
import Skeleton from "../../skeleton/Skeleton"
import './map.css'

const Map = ( {} ) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    return (
        <section ref={ ref } className="map">
            { inView ?
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1f583852670f9c031088be0562c42dc07ba5a33ba76cf6ab688033c708267d5&amp;source=constructor" frameborder="0"></iframe> :
            <Skeleton height={'clamp(340px, 38vw, 730px)'} /> }
        </section>
    )
    
}

export default Map