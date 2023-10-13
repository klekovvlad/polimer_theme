import './heroImage.css';

const HeroImg = ({img}) => {
    
    return(
        <div className="hero-img hasLogo">
            <img src={img.url} alt={img.alt} />
        </div>
    )
}

export default HeroImg;