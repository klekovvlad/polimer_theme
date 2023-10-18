import { AppContext } from "../../App"
import { useContext, useState } from 'react'
import './popup.css'
import Button from "../button/Button"
import { IMaskInput } from "react-imask"
import { POPUP_TYPES } from "./types"
import { Link, useNavigate } from "react-router-dom"

const initForm = {
    'Имя': '',
    'Телефон': ''
}

const initQuiz = {}

const Popup = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [form, setForm] = useState(initForm)
    const { state, quiz, setQuiz, popup, setPopup } = useContext(AppContext)
    const popups = state.acf.popups;
    const navigate = useNavigate()

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
        let valid = true
        const inputs = e.target.querySelectorAll('input')

        inputs.forEach(input => {
            if(input.value === '' || input.name === 'Телефон' && input.value.length < 16) {
                valid = false
                input.classList.add('no-valid')
            }
        });

        if(valid) {
            setIsLoad(true)
            let str = ''
            const data = popup.type === POPUP_TYPES.ORDER ? {...form, ...quiz} : {...form}
            for(let key in data) {
                str = str + `${key}: ${data[key]} \n`
            }
            send(str)
        }
    }

    const handleChange = (e) => {
        
        if(e.target.classList.contains('no-valid')) {
            e.target.classList.remove('no-valid')
        }

        const newForm = {...form}
        newForm[e.target.name] = e.target.value
        setForm(newForm)        
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
                    <IMaskInput type="tel" mask={ Date } min={ new Date() } max={ new Date(2030, 12, 31) } name="Дата вывоза" value={ form['Дата вывоза'] ? form['Дата вывоза'] : '' } onInput={ handleChange } placeholder="Дата вывоза"/>
                    <input type="text" name="Имя контрагента" value={ form['Имя контрагента'] ? form['Имя контрагента'] : '' } onInput={ handleChange } placeholder="Имя контрагента" />
                </>
            )
        }else{
            return <></>
        }
    }

    const send = (message) => {
        const formData = new FormData()
        formData.append('message', message)
        
        fetch('/wp-json/contact-form-7/v1/contact-forms/160/feedback', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            setPopup({...popup, open: false})
            setQuiz(initQuiz)
            setForm(initForm)
            navigate('/thanks/')
            setIsLoad(false)
        })
        .catch(error => {
            alert('Произошла ошибка, попробуйте позже')
        })
    }

    console.log(form)

    return (
        <div onClick={ handleClick } className={`popup ${ popup.open ? 'open' : '' }`}>
            <div className={`popup-body ${ isLoad ? 'popup-load' : '' }`}>
                <button onClick={ handleCloseButton } className="close"></button>
                <div className="popup-title">{ popups[popup.type].title }</div>
                <form onSubmit={ handleSubmit }>
                    <input onInput={ handleChange } value={ form['Имя'] } name="Имя" type="text" placeholder="Имя" />
                    <IMaskInput onInput={ handleChange } mask={ '+{7}(000)000-00-00' } value={ form['Телефон'] } name="Телефон" type="tel" placeholder="Телефон" />
                    { renderOrderInputs() }
                    <Button text={ popups[popup.type].button } />
                </form>
                <div className="popup-rules">
                    Нажимая на кнопку “{ popups[popup.type].button }”, я соглашаюсь на обработку персональных данных и соглашаюсь с <Link onClick={() => {setPopup({...popup, open: false})}} to={'/privacy-policy/'}>политикой конфиденциальности</Link>
                </div>
            </div>
        </div>
    )
}

export default Popup