import React from 'react'
import './portfolio.css';
import Project from "./Project";
import portfolioData from '../../helpers/porfolioData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
 

function Portfolio() {
  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1>Portfolio</h1>
      <Swiper
      module={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={50}
      scrollbar={{
        draggable: true,
      }}
      pagination={{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
      }}
      navigation
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