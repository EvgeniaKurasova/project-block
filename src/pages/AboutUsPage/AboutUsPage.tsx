/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './AboutUsPage.scss'
import React from 'react'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'
import Header2 from 'Conteiner/Header2/Header2'
import { Container, Button } from '@mui/material'

interface Props {}
const AboutUsPage = (props: Props) => {
  return (
    <div className='container-block'>
        <Header2/>
        <Container className='container'>
        <div className='about-us-hi-block flex'>
            <div className='about-us-hi-block-text padding15'>
              <h2 className='title-about-us-page'>Hi, I'm Laura Nikova!</h2>
              <div className='long-green-line'></div>
              <p className='about-us-book-p p-hi'>I’m Laura, a classically trained chef whose first culinary love is cooking for my family and second is helping you cook for yours</p>
              <p className='about-us-book-p p-hi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <Button variant='contained' className='about-us-button'>Discover More</Button>
            </div>
            <img src='/images/about-us-img.png' className='about-us-img padding15'/>
        </div>
        <div className='about-us-book'>
          <img/>
        </div>
        <div className='about-us-story-block flex'>
          <div className='about-us-story-block-photo margin15'>
            <img src='/images/about-us-photo-with-eat.jpg' className='about-us-story-block-photo-img'></img>
            <div className='h3-block'>
            <div className='green-line-block'>
              <div className='green-line-block-short'></div>
              <div className='green-line-block-long'></div>
            </div>
            <h3 className='title-about-us-page-h3'>A WordPress Theme For Food Bloggers</h3>
            <div className='green-line-block'>
              <div className='green-line-block-long'></div>
              <div className='green-line-block-short'></div>
            </div>
            </div>
          </div>
          <div className='about-us-story-block-text margin15'>
            <h2 className='title-about-us-page'>Story Behind This Food Blog</h2>
            <div className='long-green-line'></div>
            <p className='about-us-book-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p className='about-us-book-p'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
            <div className='about-us-story-check-block'>
              <div className='about-us-story-check p'>
                <div className='about-us-story-check-div'><img src='/images/img-check-white.png' className='about-us-story-check-img'/></div>
                Aliquam tincidunt mauris eu risus.</div>
              <div className='about-us-story-check p'>
              <div className='about-us-story-check-div'><img src='/images/img-check-white.png' className='about-us-story-check-img'/></div>
                Vestibulum auctor dapibus neque.</div>
              <div className='about-us-story-check p'>
              <div className='about-us-story-check-div'><img src='/images/img-check-white.png' className='about-us-story-check-img'/></div>
              Nunc dignissim risus id metus.</div>
            </div>
          </div>
        </div>
        <div className='about-us-thank-block flex'>
          <div className='about-us-thank-block-text padding15'>
          <h2 className='title-about-us-page'>Thank You For Reading</h2>
          <div className='long-green-line'></div>
          <p className='about-us-book-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. A wonderful serenity has taken possession of my entire soul.</p>
          <p className='about-us-book-p'>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
          <img className='about-us-line-img' src='/images/about-us-line-img.png'></img>
          <div className='about-us-check'>
              <div className='about-us-story-check p'><img src='/images/img-check-green.png' className='about-us-check-img'/>Aliquam tincidunt mauris eu risus.</div>
              <div className='about-us-story-check p'><img src='/images/img-check-green.png' className='about-us-check-img'/>Vestibulum auctor dapibus neque.</div>
              <div className='about-us-story-check p'><img src='/images/img-check-green.png' className='about-us-check-img'/>Nunc dignissim risus id metus.</div>
            </div>
          </div>
          <div className='about-us-thank-block-text gray-border padding15'>
            <p className='big-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <p className='big-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <ul className='about-us-thank-block-ul'>
              <li>Donec quis dui at dolor tempor interdum.</li>
              <li>Cras iaculis ultricies nulla.</li>
              <li>Ut aliquam sollicitudin leo.</li>
            </ul>
          </div>
        </div>
        </Container>
        <FooterVarTwo/>
    </div>
  )
}
export default AboutUsPage
