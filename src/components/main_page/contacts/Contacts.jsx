import Title from "../../title/Title"
import ContactItem from "./contactitem/ContactItem"
import './contacts.css'

const Contacts = ( {state} ) => {

    const contacts = state.contacts.map((item, index) => <ContactItem key={index} item={item} />)

    if(!state.hide) {
        return (
            <section className="ourcontacts">
                <Title title={ state.title } />

                <div className="ourcontacts-wrapper">
                    { contacts }
                </div>
            </section>
        )
    }else {
        return <></>
    }

}

export default Contacts