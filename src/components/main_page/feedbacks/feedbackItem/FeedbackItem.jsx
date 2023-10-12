import './feedbackItem.css'

const FeedbackItem = ({item}) => {

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
        <div className="feedback-item">
            <div className="feedback-author">
                { author.photo ? <img src={ author.photo.url } alt={ 'Отзыв' + author.name } className="feedback-author-photo" /> : <div className="feedback-author-photo"></div> }
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