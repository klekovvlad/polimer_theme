const Column = ({props}) => {

    let contacts = []

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

    return (
        <div className="contacts">
            {contacts}
        </div>
    )
}

export default Column;