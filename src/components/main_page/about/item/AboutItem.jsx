import './aboutItem.css'

const AboutItem = ({item}) => {

    return (
        <div className="about-item">
            <img src={ item.icon.url } alt={ item.icon.alt } className="about-item-icon" />
            <div className="about-item-desc" dangerouslySetInnerHTML={{__html: item.text}} />
        </div>
    )
}

export default AboutItem;