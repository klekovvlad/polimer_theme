import Slider from "../../slider/Slider"
import FeedbackItem from "./feedbackItem/FeedbackItem"
import './feedbacks.css'

const Feedbacks = ({state}) => {

    const feedbacks = state.items.map(({item}, index) => (
        <FeedbackItem key={ index } item={ item } />
    ))

    if(!state.hide) {
        return (
            <Slider className='feedbacks' title={ state.title } childrens={ feedbacks } />
        )
    }else {
        return <></>
    }
}

export default Feedbacks