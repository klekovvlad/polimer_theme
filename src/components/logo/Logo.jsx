import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { useContext } from 'react'
import './logo.css'

const Logo = ({ dark }) => {

    const {state} = useContext(AppContext)
    const logo = state.acf.logo

    let path = logo.img.url
    
    if(dark) {
        path = logo.img_dark.url
    }

    return(
        <Link to='/' className="logo">
            <img src={ path } alt={logo?.img?.url} />
            <span className="logo-text">{logo?.text}</span>
        </Link>
    )
}

export default Logo