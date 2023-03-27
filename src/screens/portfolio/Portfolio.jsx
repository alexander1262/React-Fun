import React from 'react'
import './portfolio.css';
import Project from "./Project";
import portfolioData from '../../helpers/porfolioData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination, A11y, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube'
 

function Portfolio() {
  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1>Portfolio</h1>
      <Swiper
      module={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      slidesPerView={1}
      grabCursor={true}
      effect='cube'
      centeredSlides
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
      }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      className='swiperPortfolio'
      >
          <SwiperSlide>
            <Project item={portfolioData[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Project item={portfolioData[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Project item={portfolioData[2]} />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio