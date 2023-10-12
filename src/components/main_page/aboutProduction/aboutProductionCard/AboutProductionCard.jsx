import './aboutProductionCard.css'

const AboutProductionCard = ( { card } ) => {

    return (
        <div className="about-production-card">
            <div className="about-production-card-title">{ card.title }</div>
            <div className="about-production-card-desc">{ card.desc }</div>
        </div>
    )
}

export default AboutProductionCard