import Skeleton from '../../../skeleton/Skeleton'
import './feedbackItem.css'
import { useInView } from 'react-intersection-observer'

const FeedbackItem = ({item}) => {
    
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const author = item.author
    const authorName = author.name ? author.name : 'Аноним'
    const authorCity = author.city ? author.city : 'Ставрополь'
    const getRating = () => {
        const array = []
        for(let i = 0; i < Number(item.rating); i++) {
            array.push(
                <span key={i} className="star"></span>
            )
        }
        return array
    }

    return (
        <div ref={ ref } className={ `feedback-item ${ inView ? 'active' : '' }` }>
            <div className="feedback-author">
                { author.photo && inView ? <img src={ author.photo.url } alt={ 'Отзыв' + author.name } className="feedback-author-photo" /> : <Skeleton aspect_ratio={'1 / 1'} /> }
                <div className="feedback-author-name"> { authorName } </div>
                <div className="feedback-author-city"> { authorCity } </div>
                <div className="feedback-stars"> 
                    <span className="feedback-stars-text">{ item.rating + '.0' }</span> 
                    { getRating() } 
                </div>
            </div>
            <p className="feedback-item-text">
                { item.text }
            </p>
        </div>
    )
}

export default FeedbackItem;