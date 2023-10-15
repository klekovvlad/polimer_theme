import './skeleton.css'

const Skeleton = ( { width, height, aspect_ratio } ) => {

    return (
        <div style={{
            width: width,
            height: height,
            aspectRatio: aspect_ratio
        }} className="skeleton" />
    )
}   

export default Skeleton