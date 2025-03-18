"use client";
import { useState, useEffect } from "react";
import featureStyle from "@/style/feature.module.css";
import ReactPlayer from "react-player";
import ToolBar from "./toolBar";

const FeatureDisplay = ({data, isVideoPlaying}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false);
    console.log("isPlaying", isVideoPlaying);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const videos = [
        "/videos/sample-video.mp4",
        "/videos/sample-video.mp4",
        "/videos/sample-video.mp4",
    ];

    return ( 
        <section className={featureStyle.section}>
            <ToolBar/>
            {data ? <div className={featureStyle.videoContainer}>
                <div className={featureStyle.videoBox + " " + (isVideoPlaying ? featureStyle.active : "" )}>
                    {isClient && (
                        <ReactPlayer
                            url={data}
                            playing={isPlaying}
                            controls={true}
                            width="100%"
                            height="auto"
                        />
                    )}
                </div>
                <span className={featureStyle.clickPlayTxt}>Click Play to view the animation</span>
            </div> :
            <div className={featureStyle.headingWrapper}>
                <h1 className={featureStyle.titleMain}>Welcome To <span>Tata ClassEdge</span></h1>
                <h2 className={featureStyle.subTitle}>Inspiring Learning, Empowering Teachers</h2>
            </div>
        }
            
        </section>
    );
};

export default FeatureDisplay;
