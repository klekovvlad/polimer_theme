import { AppContext } from "../../App";
import { useContext } from 'react';
import './socialLinks.css'

const SocialLinks = ({ summ, phone, dark }) => {
    const {state} = useContext(AppContext)

    const links = state.acf.social
    const socialLinks = []
    const summary = summ ? summ : links.length

    for(let i = 0; i < summary; i++) {
        socialLinks.push(
            <a className="social-link" key={i} target="_blank" href={links[i].url}>
                <img src={links[i].icon.url} alt={links[i].icon.alt} />
            </a>
        )
    }

    if(phone) {
        socialLinks.push(
            <a className="social-link" key={state.acf.phone.url} href={`tel:${state.acf.phone.url}`}>
                <img src={state.acf.phone.icon.url} alt={state.acf.phone.icon.alt} />
            </a>
        )
    }

    return (
        <div className={ `social-links ${ dark ? 'social-links__dark' : '' }` }>
            { socialLinks }
        </div>
    )
}

export default SocialLinks;