import React from "react"
import YouTube from "react-youtube"

const MovieClip = () => {

    // const _onReady = (event) => {
    //     event.target.pauseVideo()
    // }

    // const options = {
    //     height : '390',
    //     width: '640',
    //     playerVars: {
    //         autoplay: 1,
    //         controls: 1,
    //     },
    // }

    // return <YouTube videoId="XAmy645yKuc" options={options} onReady={_onReady} id="video"/>
    return  <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}>
                <iframe 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src="https://www.youtube.com/embed/XAmy645yKuc?si=WdDfXdLCd4Zfa_pv" 
                    frameborder="0" >
                </iframe>
            </div>
} 

export default MovieClip