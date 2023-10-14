import { AppContext } from "../../App"
import Contacts from "../contacts/Contacts"
import Logo from "../logo/Logo"
import { useContext } from 'react'
import SocialLinks from "../social_links/SocialLinks"
import './footer.css'

const Footer = () => {

    const { state } = useContext(AppContext)

    return (
        <footer className="footer">
            <Logo dark={ true } />
            <Contacts 
                popup={ true }
                props={[
                    {
                        company: state.acf.company
                    },
                    {   
                        work: state.acf.work_times,
                        adress: state.acf.adress,
                    },
                    {
                        phone: state.acf.phone,
                        email: state.acf.email, 
                    }
                ]} />
            <SocialLinks dark={true} />
        </footer>
    )
}

export default Footer