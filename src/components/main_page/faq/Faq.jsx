import Title from "../../title/Title";
import FaqItem from "./faqItem/FaqItem";
import './faq.css'
import { useInView } from "react-intersection-observer";
import Skeleton from "../../skeleton/Skeleton";

 const Faq = ( {state} ) => {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

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
            <section ref={ ref } className="faq">
                <Title title={ state.title } />
                <div className="faq-wrapper">
                    <div className="faq-items">
                        { questions }
                    </div>
                    { inView ? getImage() : <Skeleton height='280px' /> }
                </div>
            </section>
        )
    }else {
        return <></>
    }
}

export default Faq;