import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

// slides array
const slides = [
    {
        title: 'Best Video Editing In Nigeria',
        image: 'https://images.unsplash.com/photo-1533231432516-553b08545547?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'World Class Video Production',
        image: 'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Brown and Blue Hardbound Book',
        image: 'https://images.unsplash.com/photo-1485662765173-b710c399cd34?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const Hero = () => {
  return (
    <div className='relative container mx-auto' style={{maxWidth: '1600px'}}>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className='block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right' style={{
                        height: '50vh',
                        backgroundImage: `url('${slide.image}')`,
                        backgroundBlendMode: 'linear'
                    }}>
                        <div className='container mx-auto'>
                            <div className='bg-black opacity-65 flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide rounded-sm'>
                                <p className='text-white text-2xl my-4 pt-2'>{slide.title}</p>
                                <a href="#" className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2'>view pricing</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Hero