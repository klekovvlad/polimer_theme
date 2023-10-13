import Title from "../../title/Title";
import FaqItem from "./faqItem/FaqItem";
import './faq.css'

 const Faq = ( {state} ) => {

    const getImage = () => {
        if(state.img) {
            return (
                <div className="faq-img hasLogo">
                    <img src={state.img.url} alt={state.img.alt} />
                </div>
            )
        }else{
            return <></>
        }
    }

    const questions = state.items.map(({item}, index) => <FaqItem key={index} item={item} />) 

    if(!state.hide) {
        
        return (
            <section className="faq">
                <Title title={ state.title } />
                <div className="faq-wrapper">
                    <div className="faq-items">
                        { questions }
                    </div>
                    { getImage() }
                </div>
            </section>
        )
    }else {
        return <></>
    }
}

export default Faq;