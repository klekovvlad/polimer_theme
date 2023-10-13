import { AppContext } from "../../../App"
import { useContext, useState, useEffect } from 'react'
import Title from "../../title/Title"
import { IMaskInput } from "react-imask"
import Button from "../../button/Button"
import './quiz.css'
import { POPUP_TYPES } from "../../popup/types"

const Quiz = ({ state }) => {
    const { production, quiz, setQuiz, popup, setPopup } = useContext(AppContext)
    const [summary, setSummary] = useState(0)
    const [price, setPrice] = useState(0)

    const handleInputChange = (e) => {

        setQuiz(
            {
                ...quiz,
                [e.target.name]: e.target.value,
            }
        )

        if(e.target.dataset.price) {
            setPrice(e.target.dataset.price)
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
        console.log('ok')
        setPopup({
            ...popup,
            open: true,
            type: POPUP_TYPES.CALLBACK
        })
    }

    console.log(popup)

    return (
        <section className="quiz">
            <Title title={ state.title } />
            <div className="quiz-wrapper">
                <div className="quiz-question">
                    <span className="number hasSlash">1</span>
                    Какая пленка вам нужна?
                </div>
                <div className="quiz-answers">
                    { radioInputs }
                </div>
            </div>

            <div className="quiz-wrapper">
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
                        <IMaskInput mask={ Number } type="number" min={0} max={5000} radix="." onChange={ handleInputChange } value={ quiz['Вес рулона'] } name="Вес рулона" id="input-weight" placeholder="Введите параметры" />
                    </div>
                </div>
            </div>

            <div className="quiz-wrapper">
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