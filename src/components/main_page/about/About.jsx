import Title from "../../title/Title"
import AboutItem from "./item/AboutItem"
import AboutNumber from "./numbers/AboutNumber"
import './about.css'
import { useInView } from "react-intersection-observer"
import Skeleton from "../../skeleton/Skeleton"

const About = ({ state }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const numbers = state.nums.map((num, index) => (
        <AboutNumber key={index} item={num} />
    ))

    const items = state.items.map((item, index) => (
        <AboutItem key={index} item={item} />
    ))

    if(!state.hide) {
        return (
            <section className="about">
                <Title title={state.title} />
                <div className="about-wrapper">
                    { state.img && inView ? <img ref={ ref } src={state.img.url} alt={state.img.alt} className={`about-item about-item__img ${ inView ? 'active' : '' }`} /> : <Skeleton /> }
                    { numbers ? <div ref={ ref } className={ `about-item about-item__nums ${ inView ? 'active' : '' }` }> { numbers } </div> : '' }
                    { items }
                </div>
            </section>
        )
    }else{
        return <></>
    }
}   

export default About