import { AppContext } from "../../App";
import { useContext } from 'react'
import Hero from "./hero/Hero";
import Productions from "./productions/Productions";
import About from "./about/About";
import AboutProduction from "./aboutProduction/AboutProduction";
import Feedbacks from "./feedbacks/Feedbacks";
import Gallery from "./gallery/Gallery";
import Faq from "./faq/Faq";

const Main = () => {
    const { state } = useContext(AppContext)

    return (
        <main className="main-page">
            <Hero state={state.acf.hero} />
            <Productions />
            <About state={state.acf.about} />
            <AboutProduction state={state.acf.about_production} />
            <Feedbacks state={state.acf.feedbacks} />
            <Gallery state={state.acf.gallery} />
            <Faq state={state.acf.faq} />
        </main>
    )
}

export default Main;