import { useContext } from 'react'
import { AppContext } from '../../../../App'
import './contactItem.css'

const ContactItem = ({item}) => {

    const { state } = useContext(AppContext)

    let contacts = null
    let prefix = ''

    if(item.type === 'phone') {
        prefix = 'tel:'
    }else if(item.type === 'email') {
        prefix = 'mailto:'
    }

    if(item.items) {
        contacts = item.items.map((item, index) => (
            <div key={ index } className="ourcontact-item">
                <a href={ prefix + item.item.url }>{ item.item.ui }</a>
                { item.text ? <span>{ item.text }</span> : '' }
            </div>
        ))
    }else{
        contacts = <div className="ourcontact-item"><a href={prefix + state.acf[item.type].url }>{ state.acf[item.type].ui }</a></div>
    }

    return (
        <div className="ourcontacts-item">
            <img src={ item.icon.url } alt={ item.icon.alt } className="ourcontacts-item-icon" />
            <div className="ourcontacts-item-title">{ item.title }</div>
            { contacts }
        </div>
    )
}

export default ContactItem