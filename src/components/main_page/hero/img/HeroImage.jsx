import './heroImage.css';

const HeroImg = ({img}) => {
    
    return(
        <div className="hero-img">
            <img src={img.url} alt={img.alt} />
        </div>
    )
}

export default HeroImg;