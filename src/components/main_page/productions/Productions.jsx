import { useEffect, useState, useContext } from 'react'
import Title from '../../title/Title'
import ProductinCard from './cards/ProductionCard'
import './productions.css'
import { AppContext } from '../../../App'
import Skeleton from '../../skeleton/Skeleton'

const Productions = () => {
    const [title, setTitle] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const { production, setProduction } = useContext(AppContext)

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

    const skeletons = [
        <Skeleton />,
        <Skeleton />,
        <Skeleton />,
    ]

    return (
        <section className="production">
            <Title title={title} />
            <div className="production-wrapper">
                { isLoad ? productionCards : skeletons }
            </div>
        </section>
    )
}

export default Productions