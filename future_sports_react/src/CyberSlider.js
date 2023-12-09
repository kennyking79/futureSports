//This example came from  https://victoriaoluwaferanmi.medium.com/creating-a-logo-slider-using-react-slick-e8bf94a63fc3


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';

const logos = [

    `${process.env.PUBLIC_URL}/Images/logo4.png`,
    `${process.env.PUBLIC_URL}/Images/logo5.png`,
    `${process.env.PUBLIC_URL}/Images/logo6.png`,
    `${process.env.PUBLIC_URL}/Images/logo7.png`,
    `${process.env.PUBLIC_URL}/Images/logo8.png`,
    `${process.env.PUBLIC_URL}/Images/logo9.png`,
    `${process.env.PUBLIC_URL}/Images/logo10.png`,
    `${process.env.PUBLIC_URL}/Images/logo11.png`,
    `${process.env.PUBLIC_URL}/Images/logo12.png`,
    `${process.env.PUBLIC_URL}/Images/logo13.png`,
    `${process.env.PUBLIC_URL}/Images/logo14.png`,
    `${process.env.PUBLIC_URL}/Images/logo15.png`,
    `${process.env.PUBLIC_URL}/Images/logo16.png`,
    `${process.env.PUBLIC_URL}/Images/logo17.png`,
    `${process.env.PUBLIC_URL}/Images/logo18.png`,
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