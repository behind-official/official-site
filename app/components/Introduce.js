import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../css/Introduce.css";


gsap.registerPlugin(ScrollTrigger);

export default function Introduce() {
    const bannerRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    }

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: bannerRef.current,
                start: '40% 100%',
                end:'25% 20%',
                scrub:1,
                // markers:true
            }
        })
        .fromTo('.bannerWrap .bannerTitle .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
        .fromTo('.bannerWrap .bannerTitle .b', {x:'100%'}, {x:'-45%', ease:'none', duration:9},0)
        gsap.timeline({
            scrollTrigger: {
                trigger: bannerRef.current,
                start: '10% 100%',
                end:'20% 20%',
                scrub:1,
                // markers:true
            }
        })
        .fromTo('.bannerWrap .bannerImage', {y:'-100%'}, {y:'0%', ease:'none', duration:5},0)

    }, []);
  return (
    <div className="bannerWrap" ref={bannerRef}>
        <div class="bannerTitle">
            <p class="a">big project</p>
            <p class="b en2">with a dreams</p>
        </div>
        <div className="bannerImage">
            <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleCardClick}>
                <div className="cardFront">
                    <img src="/images/banner/card.png" alt="Card" />
                </div>
                <div className="cardBack">
                    <img src="/images/banner/card02.png" alt="Card" />
                </div>

            </div>
            
        </div>
    </div>
  );
}
