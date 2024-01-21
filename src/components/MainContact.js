import {contactInfo, infoLink} from "../recoil/atoms";
import {Link} from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef, useState} from "react";
import Text from "../styles/Text";
import {vw} from "../utils/common";

const Section = styled.section`
    position: relative;
    padding: 120px 0 0;
    //height: 100vh;
    //box-sizing: border-box;
    // background-color: ${theme.color.black};
    //background-color: ${theme.color.white};
`;
const Inner = styled.div`
    margin: 0 auto;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px; 
        padding-right: 60px; 
    `};

    ${({theme}) => theme.medium`
        padding-left: 40px; 
        padding-right: 40px; 
    `};

    ${({theme}) => theme.small`
        padding-left: ${vw(40)}; 
        padding-right: ${vw(40)}; 
    `};
`;
const TxtBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 130px 0 320px;

    ${({ theme }) => theme.xLarge`
        flex-direction: column;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(130)} 0 ${vw(280)};
    `};
`;
const TxtDesc = styled.div`
    margin-right: 50px;
    width: 360px;
    
    p{
        overflow: hidden;
        font-size: 20px;
        line-height: 1.6;
        
        span{
            display: block;
        }
    }
    
    ${({theme}) => theme.xLarge`
        margin-right: 0;
        margin-bottom: 50px;
    `};

    ${({theme}) => theme.medium`
        width: 100%;
    `};

    ${({theme}) => theme.small`
        p{
            font-size: ${vw(30)};
        }
    `};
`;
const InfoCon = styled.div`
    li{
        overflow: hidden;
    }
`;
const ContactTxt = styled.ul`
    margin-bottom: 30px;
    font-size: 80px;
    font-weight: 500;

    &:last-of-type{
        margin-bottom: 0;
    }

    a{
        position: relative;

        &::after{
            content: '';
            position: absolute;
            display: block;
            width: 0;
            height: 6px;
            background-color: #000;
            transition: width 0.4s;
            
        }

        &:hover{
            &::after{
                width: 100%;
            }
            text-decoration: underline;
        }
    }

    ${({theme}) => theme.large`
        margin-bottom: 50px;
        font-size: 76px;
    `};

    ${({theme}) => theme.medium`
        font-size: 66px;
    `};

    ${({theme}) => theme.sMedium`
        font-size: 54px;
    `};

    ${({theme}) => theme.small`
        font-size: ${vw(54)};
        
        li{
            margin-bottom: ${vw(10)};
            &:last-of-type{
                margin-bottom: 0;
            }
        }
    `};
`;
const LinkTxt = styled.ul`
    display: flex;
    margin-top: 50px;
    font-size: 30px;
    font-weight: 500;

    li{
        margin-right: 40px;

        &:last-of-type{
            margin-right: 0;
        }
    }

    ${({theme}) => theme.xLarge`
        margin-right: 0;
    `};

    ${({theme}) => theme.small`
        font-size: ${vw(40)};
        
        li{
            margin-right: ${vw(40)};
        }
    `};
`;
const DecoTxt = styled.p`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 40px;
    font-size: 120px;
    font-weight: 900;
    color: ${theme.color.white};
    letter-spacing: 6px;
    text-shadow: -2px 0 #ddd, 0 2px #ddd, 2px 0 #ddd, 0 -2px #ddd;
    //-webkit-text-stroke: 1px ${theme.color.black};

    span{
        white-space: nowrap;
    }

    ${({theme}) => theme.small`
        font-size: ${vw(120)};
    `};
`;

function MainContact(){
    const sectionRef = useRef(null);
    const descRef = useRef(null);
    const infoRef = useRef(null);
    const decoRef = useRef(null);
    const [decoIdx, setDecoIdx] = useState(1);

    const txtMotion = () => {
        const decoTxt = decoRef.current;
        const decoSpan = decoTxt.querySelectorAll('span');

        setDecoIdx((prev) => prev++);
        if(decoSpan.length - 1  === decoIdx){
            setDecoIdx(1);
            decoTxt.style.left = 0;
        }

        decoTxt.animate({'left': '-'+(100*decoIdx)+'px'}, 1500, () => {
            setTimeout(() => {
                txtMotion();
            }, 750);
        });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const desc = descRef.current;
        const info = infoRef.current;
        const deco = decoRef.current;

        const h2 = section.querySelector('h2');
        const infoList = info.querySelectorAll('ul li');

        gsap.set(section, {backgroundColor: theme.color.black});
        gsap.set(h2, {yPercent: 0, opacity: 0, color: theme.color.white});
        gsap.set(desc, {yPercent: 20, opacity: 0, color: theme.color.white});
        gsap.set(infoList, {xPercent: 20, opacity: 0, color: theme.color.white});
        gsap.set(deco, {opacity: 0, color: theme.color.white});

        let ctx = gsap.context(() => {
            const ani = gsap.timeline();
            ani.to(section, {backgroundColor: theme.color.white})
            ScrollTrigger.create({
                animation: ani,
                trigger: section,
                start: "top top",
                end: "center center",
                scrub: 1,
            });

            const ani2 = gsap.timeline();
            ani2.to(h2, {yPercent: 0, opacity: 1, color: theme.color.black})
                .to(desc, {yPercent: 0, opacity: 1, color: theme.color.black})
                .to(infoList, {xPercent: 0, opacity: 1, color: theme.color.black}, 'motion')
                .to(deco, {opacity: 1, color: theme.color.white}, 'motion')

            ScrollTrigger.create({
                animation: ani2,
                trigger: section,
                start: "top top",
                end: "center center",
                scrub: 1,
            });

            // let ani3 = gsap.timeline({
            //    repeat: -1,
            // });
            // gsap.set(deco, {opacity: 1});
            // ani3.from(deco, {
            //     xPercent: 0,
            //     // repeat: -1,
            // });
            // ani3.to(deco, {
            //     xPercent: -50,
            //     opacity: 1,
            //     delay: 0.5,
            //     onComplete: () => {
            //         deco.style.left = 0;
            //     }
            //     // repeat: -1,
            // });

        }, sectionRef);
        return () => ctx.revert();

    }, []);
    // useEffect(() => {
    //     // let txtIdx = 1;
    //     // txtMotion();
    //     // console.log(decoIdx);
    // }, [decoIdx]);

    let phraseTxt = "안녕하세요\n프론트엔드 개발자 최승연입니다.\n좋은 동료들과 재미있게 일하고 싶습니다.\n연락주세요!";
    phraseTxt= phraseTxt.split("\n");

    return (
        <Section className="sec-03" ref={sectionRef}>
            <Inner className="inner">
                <Text name="tit1">Contact</Text>
                <TxtBox>
                    <TxtDesc ref={descRef} className="desc">
                        {
                            phraseTxt.map((txt, idx) => (
                            <p key={idx}>
                                <span>{txt}</span>
                            </p>
                        ))}
                    </TxtDesc>
                    <InfoCon ref={infoRef}>
                        <ContactTxt>
                            {contactInfo && contactInfo.map(({phone, email}, idx) => (
                                <li key={idx}>
                                    {phone && <Link to={`tel:${phone}`}>+{phone}</Link>}
                                    {email && <Link to={`mailto:${email}`}>{email}</Link>}
                                </li>
                            ))}
                        </ContactTxt>
                        <LinkTxt>
                            {infoLink && infoLink.map(({notion, github}, idx) => (
                                <li key={idx}>
                                    {notion && <Link to={notion}>Notion</Link>}
                                    {github && <Link to={github}>Github</Link>}
                                </li>
                            ))}
                            <li><Link to="">Resume</Link></li>
                        </LinkTxt>
                    </InfoCon>
                </TxtBox>
            </Inner>
            <DecoTxt ref={decoRef}>
                <span>CHOI SEUNG YEON  </span>
                <span>CHOI SEUNG YEON</span>
                <span>CHOI SEUNG YEON</span>
                <span>CHOI SEUNG YEON</span>
            </DecoTxt>
        </Section>
    )
}

export default MainContact;