import { AppContext } from "../../App"
import { useContext, useState } from 'react'
import './popup.css'
import Button from "../button/Button"
import { IMaskInput } from "react-imask"
import { POPUP_TYPES } from "./types"
import { Link } from "react-router-dom"

const initForm = {
    'Имя': '',
    'Телефон': ''
}

const Popup = () => {

    const [form, setForm] = useState(initForm)
    const { state, quiz, popup, setPopup } = useContext(AppContext)
    const popups = state.acf.popups;

    const closePopup = () => {
        setPopup(
            {...popup, open: false}
        )
        setForm(initForm)
    }

    const handleCloseButton = () => {
        closePopup()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(initForm)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        if(e.target.classList.contains('popup')) {
            closePopup()
        }
    }

    const renderOrderInputs = () => {
        if(popup.type === POPUP_TYPES.ORDER) {
            return (
                <>
                    <IMaskInput type="tel" mask={ Date } min={ new Date() } max={ new Date(2030, 12, 31) } name="Дата вывоза" value={ form['Дата вывоза'] ? form['Дата вывоза'] : '' } onChange={ handleChange } placeholder="Дата вывоза"/>
                    <input type="text" name="Имя контрагента" value={ form['Имя контрагента'] ? form['Имя контрагента'] : '' } onChange={ handleChange } placeholder="Имя контрагента" />
                </>
            )
        }else{
            return <></>
        }
    }

    return (
        <div onClick={ handleClick } className={`popup ${ popup.open ? 'open' : '' }`}>
            <div className="popup-body">
                <button onClick={ handleCloseButton } className="close"></button>
                <div className="popup-title">{ popups[popup.type].title }</div>
                <form onSubmit={ handleSubmit }>
                    <input onChange={ handleChange } value={ form['Имя'] } name="Имя" type="text" placeholder="Имя" />
                    <IMaskInput onChange={ handleChange } mask={ '+{7}(000)000-00-00' } value={ form['Телефон'] } name="Телефон" type="tel" placeholder="Телефон" />
                    { renderOrderInputs() }
                    <Button text={ popups[popup.type].button } />
                </form>
                <div className="popup-rules">
                    Нажимая на кнопку “Заказать производство”, я соглашаюсь на обработку персональных данных и соглашаюсь с <Link to={'/'}>политикой конфиденциальности</Link>
                </div>
            </div>
        </div>
    )
}

export default Popup