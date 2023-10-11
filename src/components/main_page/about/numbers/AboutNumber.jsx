import {useState, useEffect} from 'react';
import './aboutItemNum.css'

const AboutNumber = ({item}) => {

    const [num, setNum] = useState(0)
    let interval = 3000 / item.num

    useEffect(() => {

        if(num < item.num) {
            setTimeout(() => {
                setNum(num => num + 1)
            }, interval)
        }
        
    }, [num])

    return (
        <div className="about-item-number">
            <div className="number hasSlash title">{ num }+</div>
            <div className="about-item-desc">{ item.text }</div>
        </div>
    )
}

export default AboutNumber;