import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/router'
import Link from 'next/link'
import en from '../locales/en'
import th from '../locales/th'


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

    const router = useRouter()
    const { id } = router.query
    const { locale } = router;
    const t = locale === 'en' ? en : th;

    return (
        <>
            <div className="flex justify-center flex-col">
                <p className="font-bold text-xl">
                    TEST DYNAMIC ROUTING
                </p>

                {t.newsupdate.map((item) => (
                    <div key={item.id}>
                        <Link href={item.slug}>
                            <a> {item.topic} </a>
                        </Link>
                    </div>
                ))
                }

            </div>
            <Slider {...settings}>


                {t.newsupdate.map((item) => (
                    <div key={item.id} className="w-auto h-52  p-5">
                        <Link href={item.slug} >

                            <div className="bg-white mb-2 h-full rounded-md justify-center items-center flex">
                                {item.topic}
                            </div>


                        </Link>
                    </div>

                ))
                }




            </Slider>
        </>
    );
}

export default SlickNews;