import {useState, useEffect} from 'react';
import './aboutItemNum.css'
import { useInView } from 'react-intersection-observer';

const AboutNumber = ({item}) => {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const [num, setNum] = useState(0)
    let interval = 3000 / item.num

    useEffect(() => {
        if(inView) {
            setNum(num => num + 1)
        } 

    }, [inView])

    useEffect(() => {
        if(num > 0 && num < Number(item.num)) {
            setTimeout(() => {
                setNum(num => num + 1)
            }, interval)
        }
    }, [num])

    return (
        <div ref={ ref } className="about-item-number">
            <div className="number hasSlash title">{ num }+</div>
            <div className="about-item-desc">{ item.text }</div>
        </div>
    )
}

export default AboutNumber;