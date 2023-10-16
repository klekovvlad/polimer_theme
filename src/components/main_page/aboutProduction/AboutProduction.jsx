import Title from "../../title/Title"
import AboutProductionCard from "./aboutProductionCard/AboutProductionCard"
import './aboutProduction.css';
import { useInView } from "react-intersection-observer";

const AboutProduction = ( { state } ) => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const cards = state.items.map(({item}, index) => (
        <AboutProductionCard key={index} card={item} />
    ))

    if(!state.hide) {
        return (
            <section className="about-production">
                <div className="about-production-wrapper">
                    <Title color={ 'white' } title={state.title} />
                    <div ref={ ref } style={{
                        backgroundImage:  inView ? `url(${state.bg.url})` : 'var(--color-border)' 
                    }} className={ `about-production-img ${ inView ? 'active' : '' }` }></div>
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