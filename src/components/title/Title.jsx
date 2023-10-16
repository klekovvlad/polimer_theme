import SliderButtons from "../sliderButtons/SliderButtons"
import './title.css'
import { useInView } from "react-intersection-observer"

const Title = ({title, navigation, color}) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const text = <h2 ref={ ref } className={ `title ${ inView ? 'active' : '' } ${ color === 'white' ? 'white' : '' }` }>{title}</h2>

    if(navigation && window.innerWidth > 1199) {
        return (
            <div className="title-wrapper">
                { text }
                <SliderButtons />
            </div>
        )
        
    }else{
        return text
    }
}

export default Title