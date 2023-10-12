import SliderButtons from "../sliderButtons/SliderButtons"
import './title.css'

const Title = ({title, navigation}) => {

    const text = <h2 className="title">{title}</h2>

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