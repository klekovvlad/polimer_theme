import './galleryItem.css'

const GalleryItem = ({item}) => {
    
    return <img src={item.url} alt={item.alt} className="gallery-item" />
}

export default GalleryItem