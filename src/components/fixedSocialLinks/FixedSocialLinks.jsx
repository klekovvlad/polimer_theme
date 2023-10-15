import SocialLinks from "../social_links/SocialLinks"
import './fixedSocialLinks.css'
import { useState } from 'react'

const FixedSocialLinks = () => {

    const [isHide, setIsHide] = useState(false)

    const handleButton = () => {
        setIsHide(!isHide)
    }

    if(!isHide) {
        return (
            <div className="social-links-fixed">
                <button onClick={handleButton} className="close"></button>
                <SocialLinks summ={2} phone={true}/>
            </div>
        )
    }else {
        return (
            <div className="social-links-fixed closed">
                <button onClick={handleButton} className="social-link open"></button>
            </div>
        )
    }
}

export default FixedSocialLinks;