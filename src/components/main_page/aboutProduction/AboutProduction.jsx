import Title from "../../title/Title"
import AboutProductionCard from "./aboutProductionCard/AboutProductionCard"
import './aboutProduction.css';

const AboutProduction = ( { state } ) => {

    const cards = state.items.map(({item}, index) => (
        <AboutProductionCard key={index} card={item} />
    ))

    if(!state.hide) {
        return (
            <section className="about-production">
                <div className="about-production-wrapper">
                    <Title title={state.title} />
                    <img src={state.bg.url} alt={state.bg.alt} className="about-production-img" />
                    <div className="about-production-cards">
                        { cards }
                    </div>
                </div>
            </section>
        )
    }else {
        return ''
    }
}

export default AboutProduction