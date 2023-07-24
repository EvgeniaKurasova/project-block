import React from 'react'
import Slider from 'react-slick'
import './Swiper.scss'
import { Button } from '@mui/material'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

const Swiper = function (): any {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  }
  return (
    <div className='slid-container'>
        <Slider {...settings} className='slid-container-s'>
          <div className='slid-slide slid-slide-one'>
            <div className='slid-title'>
                <Button className='slid-button slid-green' variant='contained'>
                <Link to={'/categories/1'}>fast food</Link></Button>
                <h2 className='slid-title-h2'>
                <Link to={'/article/1'} className='slid-link slid-title-h2'>
                  Whole Wheat Burger Buns Without Yeast</Link></h2>
                  <div className='slid-text'>
                    <img src='images/slid-human-weight.png' className='slid-img-text'/>
                    <div>Laura Nikova</div>
                    <div className='slid-white-line'></div>
                    <img src='images/calender-whit.png' className='slid-img-text'/>
                    <div>September 6, 2022</div>
                  </div>
            </div>
          </div>
          <div className='slid-slide slid-slide-two'>
            <div className='slid-title'>
                <Button className='slid-button slid-orange' variant='contained'>
                <Link to={'/categories/6'}>lunch</Link></Button>
                <h2 className='slid-title-h2'>
                <Link to={'/article/17'} className='slid-link slid-title-h2'>
                  30 Minute Sweet Thai Chili Peanut Chicken</Link></h2>
                  <div className='slid-text'>
                    <img src='images/slid-human-weight.png' className='slid-img-text'/>
                    <div>Laura Nikova</div>
                    <div className='slid-white-line'></div>
                    <img src='images/calender-whit.png' className='slid-img-text'/>
                    <div>September 6, 2022</div>
                  </div>
              </div>
          </div>
        </Slider>
    </div>
  )
}

export default Swiper
