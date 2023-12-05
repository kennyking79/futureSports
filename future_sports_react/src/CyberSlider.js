//This example came from  https://victoriaoluwaferanmi.medium.com/creating-a-logo-slider-using-react-slick-e8bf94a63fc3


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';

const logos = [

    './Images/logo4.png',
    './Images/logo5.png',
    './Images/logo6.png',
    './Images/logo7.png',
    './Images/logo8.png',
    './Images/logo9.png',
    './Images/logo10.png',
    './Images/logo11.png',
    './Images/logo12.png',
    './Images/logo13.png',
    './Images/logo14.png',
    './Images/logo15.png',
    './Images/logo16.png',
    './Images/logo17.png',
    './Images/logo18.png',
]

const CyberSlider = () => {

    const [settings] = useState(
        {
            dots: true,
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: 'linear',
        }
    );

    return (
        <div>
            <h2>Supported by</h2>
            <Slider {...settings}>
                {
                    logos.map((logo, index) => (
                        <div key={index} className="container">
                            <img src={logo} alt="logo" width="auto" height="100"/>

                        </div>
                    ))
                }
            
            </Slider>
        </div>
    )

}
export default CyberSlider;