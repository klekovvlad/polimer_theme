import { FixedSocialLinksContext } from "../../App"
import SocialLinks from "../social_links/SocialLinks"
import './fixedSocialLinks.css'
import { useState, useContext } from 'react'

const FixedSocialLinks = () => {

    const [isHide, setIsHide] = useState(false)
    const { hideSocialLinks } = useContext(FixedSocialLinksContext)

    const handleButton = () => {
        setIsHide(!isHide)
    }

    return (
        <div className={ `social-links-fixed ${ isHide ? 'closed' : '' } ${ hideSocialLinks ? 'hide' : '' }` }>
            <button onClick={handleButton} className={ isHide ? 'social-link-open' : 'close' }></button>
            { isHide ? '' : <SocialLinks summ={2} phone={true}/> }
        </div>
    )
}

export default FixedSocialLinks;