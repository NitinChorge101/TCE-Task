"use client";
import { useState } from "react";
import FeatureDisplay from "./featureDisplay";
import StudyGuide from "./studyGuide";

const CanvasWrapper = () => {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [videoData, setVideoData] = useState("");

    const getVideoData = (videoLink)=>{
        setVideoData(videoLink);
        setVideoPlaying(true)
    }
    const hideStudyGuide = (action) =>{
        setVideoPlaying(action)
    }
    return ( 
    <>
        <FeatureDisplay data={videoData} isVideoPlaying={videoPlaying}/>
        <StudyGuide 
            videoData={getVideoData} 
            isVideoPlaying={videoPlaying} 
            hideGuide={hideStudyGuide}/>    
    </> );
}
 
export default CanvasWrapper;