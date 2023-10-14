import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './page.css';
import Loader from '../../components/loader/Loader';

const Page = ({ page_id, button, className }) => {

    const [pageContent, setPageContent] = useState('')
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        fetch(`/wp-json/wp/v2/pages/${page_id}`)
        .then(res => res.json())
        .then(data => {
            setPageContent(data.content.rendered)
            setIsLoad(true)
        })
    })

    if(isLoad) {
        return (
            <main className={`page ${ className ? `page__${className}` : '' }`}>
                <section className="page-content" >
                    <div className="page-content-wrapper" dangerouslySetInnerHTML={{__html: pageContent}} />
                    { button ? <Link className='button' to={'/'}>На главную</Link> : '' }
                </section>
                
            </main>
        )
    }else{
        return (
            <Loader />
        )
    }
}

export default Page