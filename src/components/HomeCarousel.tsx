import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HomeCarousel = () => {
    const images=[
        'https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph','https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph','https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
    ]
    return (
        <Carousel showArrows={true}>
         {
            images.map((image,id)=>
            <div key={id}>
                <img src={image} alt="" />
            </div>
            )
         }
    </Carousel>
    );
};

export default HomeCarousel;