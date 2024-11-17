import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from '../utils'
import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/all"

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    // registerPlugin

    // defining function
    const handleVideoSrcSet = () => {
        window.innerWidth < 760 ?
            setVideoSrc(smallHeroVideo) :
            setVideoSrc(heroVideo)
    }
    // using useEffent hook
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])


    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5,
            duration: 2,

        })
        gsap.to('#cta', {
            opacity: 1,
            y: -40,
            delay: 1,
            duration: 2,
            ease: "power1.inOut",
        })

    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 pro</p>

                <div className="md:w-10/12 w-9/12 ">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* // new div . cta= call to action*/}
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                <a href="#highlights" className="btn">Buy </a>
                <p className="font-normal text-xl ">From $199/month or $999</p>
            </div>
        </section>
    )
}

export default Hero