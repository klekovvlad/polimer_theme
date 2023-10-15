import { AppContext } from "../../../App"
import { useContext, useState, useEffect, useRef } from 'react'
import Title from "../../title/Title"
import { IMaskInput } from "react-imask"
import Button from "../../button/Button"
import './quiz.css'
import { POPUP_TYPES } from "../../popup/types"
import { useInView } from "react-intersection-observer"

const Quiz = ({ state }) => {
    const { production, quiz, setQuiz, popup, setPopup } = useContext(AppContext)
    const [summary, setSummary] = useState(0)
    const [price, setPrice] = useState(0)
    const weightInput = useRef(null)
    const typeTitle = useRef(null)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const handleInputChange = (e) => {

        setQuiz(
            {
                ...quiz,
                [e.target.name]: e.target.value,
            }
        )

        if(e.target.dataset.price) {
            setPrice(e.target.dataset.price)

            if(typeTitle.current.classList.contains('no-valid')) {
                typeTitle.current.classList.remove('no-valid')
            }
        }else{
            if(e.target.classList.contains('no-valid')) {
                e.target.classList.remove('no-valid')
            }
        }
    }

    useEffect(() => {
        if(quiz['Вес рулона']) {
            const result = Number(quiz['Вес рулона']) * price
            setSummary(result)
        }
    }, [quiz])

    const radioInputs = production.map(product => (
        <div key={ product.id } className="input">
            <input onChange={ handleInputChange } name="Какая пленка вам нужна?" data-price={ product.acf.price } id={ product.id } type="radio" value={ product.title.rendered } />
            <label htmlFor={ product.id }>{ product.title.rendered }</label>
        </div>
    ))

    const handleButton = () => {
        let valid = true

        if(weightInput.current.element.value === '') {
            weightInput.current.element.classList.add('no-valid')
            valid = false
        }
        if(!quiz['Какая пленка вам нужна?']) {
            typeTitle.current.classList.add('no-valid')
            valid = false
        }

        if(valid) {
            setPopup({
                ...popup,
                open: true,
                type: POPUP_TYPES.ORDER
            })
        }

    }

    return (
        <section ref={ ref } className="quiz">
            <Title title={ state.title } />
            <div className={ `quiz-wrapper ${ inView ? 'active' : '' }` }>
                <div ref={ typeTitle } className="quiz-question">
                    <span className="number hasSlash">1</span>
                    Какая пленка вам нужна?
                </div>
                <div className="quiz-answers">
                    { radioInputs }
                </div>
            </div>

            <div className={ `quiz-wrapper ${ inView ? 'active' : '' }` }>
                <div className="quiz-question">
                    <span className="number hasSlash">2</span>
                    Введите параметры
                </div>
                <div className="quiz-answers">
                    <div className="input" data-one="см">
                        <label htmlFor="input-wide">Ширина</label>
                        <IMaskInput mask={ Number } type="number" min={0} max={3000} radix="." onChange={ handleInputChange } value={ quiz['Ширина'] } name="Ширина" id="input-wide" placeholder="Введите параметры" />
                    </div>
                    <div className="input" data-one="см">
                        <label htmlFor="input-hight">Толщина</label>
                        <IMaskInput mask={ Number } type="number" min={0} max={1} radix="." onChange={ handleInputChange } value={ quiz['Толщина'] } name="Толщина" id="input-hight" placeholder="Введите параметры" />
                    </div>
                    <div className="input" data-one="кг">
                        <label htmlFor="input-weight">Вес рулона</label>
                        <IMaskInput ref={ weightInput } mask={ Number } type="number" min={0} max={5000} radix="." onChange={ handleInputChange } value={ quiz['Вес рулона'] } name="Вес рулона" id="input-weight" placeholder="Введите параметры" />
                    </div>
                </div>
            </div>

            <div className={ `quiz-wrapper ${ inView ? 'active' : '' }` }>
                <div className="quiz-answers">
                    <div className="quiz-summary">
                        <div className="quiz-summary-title">Итоговая цена:</div>
                        <div className="quiz-summary-value">{ summary.toLocaleString() } руб.</div>
                    </div>
                    <Button click={ handleButton } text={ state.button.text } />
                </div>
            </div>
        </section>
    )
}

export default Quiz