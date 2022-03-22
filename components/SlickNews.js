import React from "react";
import Slider from "react-slick";

const SlickNews = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

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
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <>
            <Slider {...settings}>


                <div className="w-auto h-52  p-5">
                    <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                        your content 1
                    </div>
                </div>
                <div className="w-auto h-52  p-5">
                    <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                        your content 2
                    </div>
                </div>
                <div className="w-auto h-52  p-5">
                    <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                        your content 3
                    </div>
                </div>
                <div className="w-auto h-52  p-5">
                    <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                        your content 4
                    </div>
                </div>
                <div className="w-auto h-52  p-5">
                    <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                        your content 5
                    </div>
                </div>

            </Slider>
        </>
    );
}

export default SlickNews;