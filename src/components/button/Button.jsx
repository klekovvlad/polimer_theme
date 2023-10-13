import './button.css'

const Button = ( { text, click } ) => {

    return (
        <button onClick={ click ? click : '' } className="button">{ text }</button>
    )
}

export default Button