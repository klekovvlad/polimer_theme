import { AppContext } from "../../App";
import { useContext } from 'react'
import Hero from "./hero/Hero";
import Productions from "./productions/Productions";
import About from "./about/About";

const Main = () => {
    const { state } = useContext(AppContext)

    return (
        <main className="main-page">
            <Hero state={state.acf.hero} />
            <Productions />
            <About state={state.acf.about} />
        </main>
    )
}

export default Main;