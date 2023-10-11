import Column from "./column/Column";
import './contacts.css'

const Contacts = ({ props }) => {


    let contacts = props.map((column, index) => <Column key={index} props={column} />)


    return (
        <div className="contacts-wrapper">
            {contacts}
        </div>
    )
}

export default Contacts