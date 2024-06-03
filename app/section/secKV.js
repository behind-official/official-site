'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/sec_kv.css";

gsap.registerPlugin(ScrollTrigger);

function prepareText() {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach(element => {
        const animateLetters = element.textContent.split('');
        element.textContent = '';
        animateLetters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.opacity = '0';
            span.style.transform = 'translateY(100%)';
            span.style.display = 'inline-block';
            span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.appendChild(span);
        });
    });
}

function animateText() {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach((element) => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        const spanElements = element.querySelectorAll('span');
        spanElements.forEach((span, i) => {
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, i * 100);
        });
    });
}

export default function Kv() {
    useEffect(() => {
        prepareText();
        animateText();

        gsap.set(".img_box", { y: 0 });

        gsap.to(".visual01", {
            y: 69,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual02", {
            y: 283,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual03", {
            y: 69,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.to(".visual04", {
            y: 0,
            scrollTrigger: {
                trigger: ".visual_box",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    }, []);

    return (
        <section className="sec_kv">
            <div className="kv_container">
                <div className="text_box">
                    <p className="animated-text text_margin">[BRINGING</p>
                    <p className="animated-text">VISIONARY<i className="text_icon"></i></p>
                    <p className="animated-text light_text">To Reality</p>
                    <p className="animated-text description_text text_padding">YOUR IDEAS]</p>
                </div>
                <div className="visual_box">
                    <div className="img_box visual01">
                        <img src="/images/kv/visual01.png" alt="" />
                    </div>
                    <div className="img_box visual02">
                        <img src="/images/kv/visual02.png" alt="" />
                    </div>
                    <div className="img_box visual03">
                        <img src="/images/kv/visual03.png" alt="" />
                    </div>
                    <div className="img_box visual04">
                        <img src="/images/kv/visual04.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
