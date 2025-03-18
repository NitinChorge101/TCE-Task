"use client";

import guideStyle from "../../style/studyGuide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";

const StudyGuide = ({videoData, isVideoPlaying, hideGuide}) => {
    const [isPlaying , setIsPlaying] = useState(false)
    const sliderData =[
        {
            content: true,
            title: "The land revenue policies introduced by the British in India significantly transformed the agrarian structure and economy of the country.",
            bgImage: "/images/british-policies/land-revenue.png"
        },
        {
            video: true,
            title:"what were the three new revenue collection system introduced by the british",
            link: "/videos/sample-video.mp4"
        },
        {
            video: true,
            title:"Permanent Settlement System and Its Impact on Indian Farmers",
            link: "/videos/sample-video.mp4"
        },
        {
            video: true,
            title:"Economic Impact of British Land Revenue Policies in India",
            link: "/videos/sample-video.mp4"
        },
        {
            video: true,
            title:"Comparison of Zamindari, Ryotwari, and Mahalwari Systems",
            link: "/videos/sample-video.mp4"
        },
    ]
    const sliderOption = {
        slidesPerView: 4,
        cssMode: false,
        spaceBetween: 10,
        mousewheel: false,
        navigation:{
            nextEl: ".slider-next",
            prevEl: ".slider-prev"
        },
        draggable: true,
        height:true,
        pagination : false,
        keyboard: true,
        loop: false,
        modules: [Navigation, Mousewheel, Keyboard, Pagination, Autoplay],
        breakpoints: {
            0:{
                slidesPerView: 1.2,
            },
            320: {
                slidesPerView: 1.2,
            },
            768:{
                slidesPerView: 3,
            },

            1024: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
            }
        }
    };

    return (
        <section className={guideStyle.section}>
            <div className={guideStyle.titleHeader}>
                <h4>Class 8A | History</h4>
                <p>3.2 | British Land Revenue Policy</p>
                <span className={guideStyle.toggleButton + " " + (isVideoPlaying ? guideStyle.active : "")} onClick={() => hideGuide(!isVideoPlaying)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
            <div className={guideStyle.guideWrapper + " " + (isVideoPlaying ? guideStyle.hide : "")}>
                <div className={guideStyle.leftCol}>
                    <div className={guideStyle.blocks}>
                        <Image src="/images/icons/e-book.svg" height="50" width="50" alt="e-book"/>
                        <p>E-BOOKS</p>
                    </div>
                    <div className={guideStyle.blocks}>
                        <Image src="/images/icons/contents.svg" height="50" width="50" alt="e-book"/>
                        <p>CONTENTS</p>
                    </div>
                </div>
                <div className={guideStyle.rightCol}>
                    <Swiper {...sliderOption} className="mySwiper">
                        {sliderData.map((item, i) => (
                            <SwiperSlide key={i} onClick={() => videoData(item.link)}>
                                <div className={guideStyle.slideContainer}>
                                    {item.content ? <Image className={guideStyle.cardImg} src="/images/british-policies/land-revenue.png" height="500" width="500" alt="e-book"/> :
                                        item.video ? <Image className={guideStyle.cardImg} src="/images/british-policies/video-bg.png" height="500" width="500" alt="e-book"/> : null
                                    }
                                    <p className={guideStyle.videoDescription}>{item.title}</p>
                                    {item.content ? 
                                    <Image className={guideStyle.sourceImage} src="/images/icons/list-icon.svg" height="30" width="30" alt="e-book"/> : 
                                    item.video ? <Image className={guideStyle.sourceImage} src="/images/icons/video-icon.svg" height="30" width="30" alt="e-book"/> : null}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className={guideStyle.navigationWrap + " " + (isVideoPlaying ? guideStyle.hideNavigation : "")}>
                <div className={"slider-prev" + " " + guideStyle.sliderBtn + " " + guideStyle.sliderNextBtn}></div>
                <div className={"slider-next" + " " + guideStyle.sliderBtn + " " +  guideStyle.sliderPrevBtn}></div>
            </div>
        </section>
    );
};

export default StudyGuide;
