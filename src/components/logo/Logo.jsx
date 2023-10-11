import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { useContext } from 'react'
import './logo.css'

const Logo = () => {

    const {state} = useContext(AppContext)
    const logo = state.acf.logo
    

    return(
        <Link to='/' className="logo">
            <img src={logo?.img?.url} alt={logo?.img?.url} />
            <span className="logo-text">{logo?.text}</span>
        </Link>
    )
}

export default Logo