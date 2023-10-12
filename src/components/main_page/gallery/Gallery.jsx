import Slider from "../../slider/Slider"
import GalleryItem from "./galleryItem/GalleryItem"
import './gallery.css'

const Gallery = ({ state }) => {

    const gallery = state.items.map(item => <GalleryItem item={item} />)

    if(!state.hide) {
        return (
            <Slider 
                className='gallery' 
                title={ state.title }
                childrens={gallery}
                swiper={
                    {
                        tablet: 2.2,
                        desktop: 3.2,
                        autoplay: true
                    }
                }  />
        )
    }else{
        return <></>
    }
}

export default Gallery