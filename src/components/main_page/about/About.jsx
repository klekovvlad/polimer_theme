import Title from "../../title/Title"
import AboutItem from "./item/AboutItem"
import AboutNumber from "./numbers/AboutNumber"
import './about.css'

const About = ({ state }) => {

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
                    { state.img ? <img src={state.img.url} alt={state.img.alt} className="about-item about-item__img" /> : '' }
                    { numbers ? <div className="about-item about-item__nums"> { numbers } </div> : '' }
                    { items }
                </div>
            </section>
        )
    }else{
        return <></>
    }
}   

export default About