import { useEffect, useState } from 'react'
import Title from '../../title/Title'
import ProductinCard from './cards/ProductionCard'
import './productions.css'

const Productions = () => {
    const [title, setTitle] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [production, setProduction] = useState([])

    useEffect(() => {
        fetch('/wp-json/wp/v2/posts/?categories=2')
        .then(res => res.json())
        .then(data => {
            setProduction(data)
        })

        fetch('/wp-json/wp/v2/categories/2')
        .then(res => res.json())
        .then(data => {
            setTitle(data.name)
            setIsLoad(true)
        })
    }, [])

    const productionCards = production.map(item => (
        <ProductinCard key={item.id} card={item} />
    ))

    return (
        <section className="production">
            <Title title={title} />
            <div className="production-wrapper">
                { productionCards }
            </div>
        </section>
    )
}

export default Productions