import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { heroVideo , smallHeroVideo } from '../utils'
import { useState, useEffect } from "react"

const Hero = () => {
const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

// defining function
const handleVideoSrcSet=()=>{
    window.innerWidth < 760 ? 
    setVideoSrc(smallHeroVideo) :
    setVideoSrc(heroVideo)
}
// using useEffent hook
useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet);

    return()=> {
        window.removeEventListener('resize', handleVideoSrcSet)
    }
},[])


    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5,
            duration: 2,

        })
    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 pro</p>

                <div className="md:w-10/12 w-9/12 ">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Hero