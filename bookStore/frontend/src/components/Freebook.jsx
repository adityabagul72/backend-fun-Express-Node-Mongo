import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'
function Freebook() {
    const[book,setBook]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/book")
        .then((response)=>{
            setBook(response.data.filter((data) => data.category === "Free"))
        })
        .catch((error)=>{
            console.log("error occured",error)
        })
    },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container px-4 md:px-9'>
                <h1 className='font-bold text-xl pb-3'>Free Offered Courses</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium placeat nihil, ipsa voluptates error officiis ea quidem, natus iure, ducimus beatae excepturi ad consequatur maxime.
                </p>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            book.map((item)=> (
                                <Cards item={item} key={item.id} />
                            ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook