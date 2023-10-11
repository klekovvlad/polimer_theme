import SocialLinks from "../social_links/SocialLinks"
import './fixedSocialLinks.css'

const FixedSocialLinks = () => {

    return (
        <div className="social-links-fixed">
            <button className="close"></button>
            <SocialLinks summ={2} phone={true}/>
        </div>
    )
}

export default FixedSocialLinks;