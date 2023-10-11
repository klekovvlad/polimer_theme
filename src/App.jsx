import { BrowserRouter } from "react-router-dom"
import Header from "./components/header/Header"
import React, { useState, useEffect, createContext } from 'react'
import Main from "./components/main_page/Main"
import FixedSocialLinks from "./components/fixedSocialLinks/FixedSocialLinks"

export const AppContext = createContext([])

const App = () => {

    const [state, setState] = useState('')
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
                <AppContext.Provider value={{state, setState}}>
                    <Header />
                    <Main />
                    <FixedSocialLinks />
                </AppContext.Provider>
            </BrowserRouter>
        )
    }else{
        <>
            Загрузка...
        </>
    }
}

export default App