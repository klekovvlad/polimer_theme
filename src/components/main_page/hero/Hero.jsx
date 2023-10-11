import Button from '../../button/Button'
import './hero.css'
import HeroImg from './img/HeroImage'

const Hero = ({state}) => {

    const list = state.list.map((item, index) => (
        <li key={index} className="hero-list-item hasSlash" dangerouslySetInnerHTML={{__html: item.item}} />
    ))

    return (
        <section className="hero">
            <div className="hero-text">
                <h1 className='title'>{ state.title }</h1>
                <ul className="hero-list">
                    { list }
                </ul>

                <Button text={ state.button.text } />
            </div>

            <HeroImg img={ state.img } />
        </section>
    )
}

export default Hero