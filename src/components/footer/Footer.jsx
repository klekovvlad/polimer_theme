import { AppContext, FixedSocialLinksContext } from "../../App"
import Contacts from "../contacts/Contacts"
import Logo from "../logo/Logo"
import { useContext, useEffect } from 'react'
import SocialLinks from "../social_links/SocialLinks"
import './footer.css'
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"

const Footer = () => {

    const { state } = useContext(AppContext)
    const { hideSocialLinks, setHideSocialLinks } = useContext(FixedSocialLinksContext)
    const { ref, inView } = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if(inView) {
            setHideSocialLinks(true)
        }else{
            setHideSocialLinks(false)
        }
    }, [inView])

    return (
        <footer ref={ ref } className="footer">
            <div className="footer-top">
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
                {/* <SocialLinks dark={true} /> */}
            </div>
            <div className="footer-bottom">
                <Link className="footer-link" to='/privacy-policy/'>Пользовательское соглашение</Link>
                <Link className="footer-link" to='/privacy/'>Политика конфиденциальности</Link>
            </div>
        </footer>
    )
}

export default Footer