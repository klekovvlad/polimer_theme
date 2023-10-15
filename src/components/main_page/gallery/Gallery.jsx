import Slider from "../../slider/Slider"
import GalleryItem from "./galleryItem/GalleryItem"
import './gallery.css'
import { useInView } from "react-intersection-observer"
import Skeleton from "../../skeleton/Skeleton"

const Gallery = ({ state }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const gallery = state.items.map(item => <GalleryItem item={item} />)
    const skeletons = [
        <Skeleton />,
        <Skeleton />,
        <Skeleton />,
        <Skeleton />,
        <Skeleton />,
    ]

    if(!state.hide) {
        return (
            <div ref={ ref } className="gallery">
                <Slider 
                    className='gallery' 
                    title={ state.title }
                    childrens={inView ? gallery : skeletons}
                    swiper={
                        {
                            tablet: 2.2,
                            desktop: 3.2,
                            autoplay: true
                        }
                    }  />
            </div>
        )
    }else{
        return <></>
    }
}

export default Gallery