import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from './slider.module.css'

function Slider() {
    const images = [
        "https://i.pinimg.com/736x/52/fc/63/52fc63e639abea92c457c5f5d33ec6a4.jpg",
        "https://i.pinimg.com/474x/4b/11/fc/4b11fc448a3610213b512204e8be8927.jpg",
        "https://i.pinimg.com/736x/0a/bf/42/0abf426c0d5c275c69f897b43c1969f5.jpg",
        "https://i.pinimg.com/736x/3a/cf/49/3acf49f032c76ceada4d87efd1b1eaca.jpg",
        "https://i.pinimg.com/474x/1f/91/91/1f9191e95508b927e42f736bbb0794aa.jpg"
    ];

    return (
        <Swiper
            className={styles.slider}
            modules={[Navigation]}
            navigation
            spaceBetween={2}
            slidesPerView={3}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
