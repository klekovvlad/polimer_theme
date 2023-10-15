import './galleryItem.css'

const GalleryItem = ({item}) => {
    
    return <img loading='lazy' src={item.url} alt={item.alt} className="gallery-item" />
}

export default GalleryItem