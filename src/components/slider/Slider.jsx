import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../title/Title';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay'
import './swiper.css'


const Slider = ( { 
    className,
    title,
    childrens,
    swiper
 } ) => {

    return (
        <Swiper className={`${className ? className : ''} ${swiper?.autoplay ? 'swiper-autoplay' : ''}`}
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            breakpoints={{
                0: {
                    spaceBetween: 20,
                    slidesPerView: swiper?.mobile ? swiper.mobile : 1.2
                },
                767: {
                    slidesPerView: swiper?.tablet ? swiper.tablet : 2
                },
                1199: {
                    spaceBetween: 30,
                    slidesPerView: swiper?.desktop ? swiper.desktop : 3
                }
            }}
            navigation={
                {
                    prevEl: '.slider-button-prev',
                    nextEl: '.slider-button-next'
                }
            }
            // loop={ swiper?.autoplay ? true : false }
            speed={swiper?.autoplay ? 5000 : 2000}
            autoplay={
                swiper?.autoplay ?
                { 
                    delay: 0,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: true
                } :
                false
            }
            >
            <Title slot="container-start" title={title} navigation={true} />
            { childrens ? childrens.map((child, index) => (<SwiperSlide key={index}>{ child }</SwiperSlide>)) : '' }
        </Swiper>
    )
}

export default Slider