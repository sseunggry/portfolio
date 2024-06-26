import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styled from "styled-components";
import theme from "../styles/theme";
import {vw} from "../utils/common";
import {loadingTxtState} from "../recoil/atoms";
import {useRecoilState} from "recoil";
import {lenis} from "../utils/smooth";

const LoadTxt = styled.div`
    overflow: hidden;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: ${theme.color.black};
    text-align: center;
    background-color: ${theme.color.white};
    transform: translate(0, 0);
    transition: transform 1.5s cubic-bezier(0.19,1,0.22,1);
    z-index: 999;

    &.hide{
        transform: translate(0, -100%);
    }

    p{
        overflow: hidden;
        height: fit-content;
        //padding: 0 40px;
        font-size: 240px;
        font-weight: 800;

        ${({theme}) => theme.large`
            font-size: 200px;
        `}

        ${({theme}) => theme.medium`
            font-size: 140px;
        `}

        ${({theme}) => theme.small`
            font-size: ${vw(130)};
        `}

        span{
            display: inline-block;
        }
    }
`;

function LoadMotion() {
    const loadTxtRef = useRef(null);
    const [loading, setLoading] = useRecoilState(loadingTxtState);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const loadTxt = loadTxtRef.current;
        const loadTxtList = loadTxt.querySelectorAll('p');
        loadTxtList.forEach((el) => {
            let txtDesc = el.innerText.split('');
            let txtDescList = '';
            txtDesc.map((txt) => txtDescList += `<span>${txt}</span>`);
            el.innerHTML = txtDescList;
        });
        const loadTxtSpan = loadTxt.querySelectorAll('span');
        const body = document.body;

        let ctx = gsap.context(() => {
            body.style.overflow = 'hidden';
            gsap.set(loadTxtSpan, {opacity: 0, yPercent: 100});

            gsap.to(loadTxtSpan, {yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "expo.inOut",
                onStart: () => {
                    lenis.stop();
                },
                onComplete: () => {
                    loadTxt.classList.add('hide');
                    setLoading(false);
                    body.style.overflow = '';
                    setTimeout(() => {
                        lenis.start();
                    }, 300);
                    // if(window.scrollY !== 0 ){
                    //     lenis.start();
                    // }
                }
            });
        }, loadTxt);

        return () => ctx.revert();
    }, []);
    return (
        <LoadTxt ref={loadTxtRef}>
            <p>SSEUNG</p>
        </LoadTxt>
    )
}

export default LoadMotion;