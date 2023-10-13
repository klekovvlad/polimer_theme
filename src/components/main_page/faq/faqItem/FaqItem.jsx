import './faqItem.css'

const FaqItem = ({ item }) => {

    const handlerClick = (e) => {
        const items = document.querySelectorAll('.faq-item')
        if(items.length > 0) {
            items.forEach(item => {
                const question = item.querySelector('.faq-answer')
                if(item !== e.target) {
                    question.style.maxHeight = '0'
                    item.classList.remove('open')
                }
            })
        }

        e.target.classList.toggle('open')
        const targetQuestion = e.target.querySelector('.faq-answer')
        if(e.target.classList.contains('open')) {
            targetQuestion.style.maxHeight = `${targetQuestion.scrollHeight}px`
        }else{
            targetQuestion.style.maxHeight = `0`
        }
    }

    return (
        <div className="faq-item" onClick={ handlerClick }>
            <div className="faq-question">{ item.question }</div>
            <div className="faq-answer">{ item.answer }</div>
        </div>
    )
}

export default FaqItem