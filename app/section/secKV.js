'use client';

import { useEffect } from "react"
import "../css/sec_kv.css";

function prepareText() {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach(element => {
        const animateLetters = element.textContent.split('');
        element.textContent = '';
        animateLetters.forEach((letter, i) => {
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
    textElements.forEach((element, index) => {
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
    }, []);
    
    return(
        <section className="sec_kv">
            <div className="kv_container">
                <div className="text_box">
                    <p className="animated-text text_margin">[BRINGING</p>
                    <p className="animated-text">VISIONARY<i className="text_icon"></i></p>
                    <p className="animated-text light_text">To Reality</p>
                    <p className="animated-text description_text text_padding">YOUR IDEAS]</p>
                </div>

            </div>
        </section>
    )
}