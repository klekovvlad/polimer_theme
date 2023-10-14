import Column from "./column/Column";
import './contacts.css'

const Contacts = ({ props, popup }) => {

    let contacts = props.map((column, index) => <Column key={index} props={column} hasPopup={ popup && index === (props.length - 1) ? true : false } />)


    return (
        <div className="contacts-wrapper">
            {contacts}
        </div>
    )
}

export default Contacts