import { AppContext } from '../../../App'
import { useContext } from 'react'
import Button from '../../button/Button'
import './hero.css'
import HeroImg from './img/HeroImage'
import { POPUP_TYPES } from '../../popup/types'

const Hero = ({state}) => {

    const { popup, setPopup } = useContext(AppContext)

    const handleButton = () => {
        setPopup({
            ...popup,
            open: true,
            type: POPUP_TYPES.ORDER
        })
    }

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

                {/* <Button click={ handleButton } text={ state.button.text } /> */}
            </div>

            <HeroImg img={ state.img } />
        </section>
    )
}

export default Hero