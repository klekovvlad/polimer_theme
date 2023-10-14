import { useContext } from 'react'
import { AppContext } from '../../../App'
import { POPUP_TYPES } from '../../popup/types'

const Column = ({props, hasPopup}) => {

    const { popup, setPopup } = useContext(AppContext)

    let contacts = []

    if(props.company) {
        contacts.push(
            <div key={'company'} className={`contact contact-company`} dangerouslySetInnerHTML={{__html: props.company}} />
        )
    }else{
        for(let key in props) {
            let item = undefined
    
            if(props[key].ui) {
                let prefix = ''
                if(key === 'phone') {
                    prefix = 'tel:'
                }else if(key === 'email') {
                    prefix = 'mailto:'
                }
    
                item = props[key].url ? 
                <a key={key} className={`contact contact-${key}`} target="__blank" href={prefix + props[key].url}>{ props[key].ui }</a> : 
                <div key={key} className={`contact contact-${key}`}>{ props[key].ui }</div>
            }else{
                item = <div key={key} className={`contact contact-${key}`}>{ props[key] }</div>
            }
     
            contacts.push(item)
        }
    }

    const handlerButton = () => {
        setPopup({
            ...popup,
            open: true,
            type: POPUP_TYPES.CALLBACK
        })
    }

    if(hasPopup) {
        contacts.push(
            <button onClick={handlerButton} className="button-footer">Заказать звонок</button>
        )
    }

    return (
        <div className="contacts">
            {contacts}
        </div>
    )
}

export default Column;