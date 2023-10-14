import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import React, { useState, useEffect, createContext } from 'react'
import Main from "./components/main_page/Main"
import FixedSocialLinks from "./components/fixedSocialLinks/FixedSocialLinks"
import { POPUP_TYPES } from "./components/popup/types"
import Footer from "./components/footer/Footer"
import Page from "./pages/page/Page"
import Popup from "./components/popup/Popup"
import Loader from "./components/loader/Loader"

export const AppContext = createContext([])

const App = () => {

    const [state, setState] = useState('')
    const [production, setProduction] = useState([])
    const [popup, setPopup] = useState({
        open: false,
        type: POPUP_TYPES.CALLBACK
    })
    const [quiz, setQuiz] = useState({})
    const [load, setLoad] = useState(false)
    

    useEffect(() => {
        fetch('/wp-json/wp/v2/pages/7')
        .then(res => res.json())
        .then(data => {
            setState(data)
            setLoad(true)
        })
    }, [])


    if(load) {
        return (
            <BrowserRouter>
                <AppContext.Provider value={
                    { 
                        state, setState, 
                        production, setProduction,
                        quiz, setQuiz,
                        popup, setPopup
                    }}>
                    <Header />
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="/thanks/" element={<Page className="thanks" page_id={161} button={true} />}/>
                    </Routes>
                    <Footer />
                    <FixedSocialLinks />
                    <Popup />
                </AppContext.Provider>
            </BrowserRouter>
        )
    }else{
        return <Loader />
    }
}

export default App