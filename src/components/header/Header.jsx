import {useContext} from 'react'
import { AppContext } from '../../App'
import Logo from '../logo/Logo'
import './header.css'
import SocialLinks from '../social_links/SocialLinks'
import Contacts from '../contacts/Contacts'

const Header = () => {

    const { state } = useContext(AppContext)

    return (
        <header className="header">
            <Logo />
            <Contacts 
            props={[
                {   
                    work: state.acf.work_times,
                    adress: state.acf.adress,
                },
                {
                    phone: state.acf.phone,
                    email: state.acf.email, 
                }
            ]} />
            {/* { window.innerWidth > 767 ? <SocialLinks summ={3} /> : '' } */}
        </header>
    )
}

export default Header