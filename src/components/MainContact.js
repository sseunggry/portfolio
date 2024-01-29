import {contactInfo, img, infoLink} from "../recoil/atoms";
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
    padding: 150px 0 0;
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
const TitBox = styled.div`
    padding: 100px 0 120px;
    width: fit-content;
    color: ${theme.color.gray2};
    
    p{
        width: 60%;
        word-break: keep-all;
    }
    h2{
        font-family: 'Playfair Display', serif;
        font-size: 120px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 1.2;
    }

    ${({ theme }) => theme.xLarge`
        flex-direction: column;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(130)} 0 ${vw(280)};
    `};
`;
const InfoCon = styled.div`
    li{
        a{
            position: relative;
        }
    }
`;
const ContactTxt = styled.ul`
    margin-bottom: 70px;
    font-size: 80px;
    font-weight: 500;
    text-align: right;
    
    li{
        margin-bottom: 30px;
        &:last-of-type{
            margin-bottom: 0;
        }
    }

    .line{
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 0;
        height: 6px;
        background-color: ${theme.color.black};

        ${({theme}) => theme.small`
            bottom: ${vw(-4)};
            height: ${vw(4)};
        `};
    }

    ${({theme}) => theme.large`
        // margin-bottom: 50px;
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
    justify-content: flex-end;
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

function MainContact(){
    const sectionRef = useRef(null);
    const infoRef = useRef(null);
    const titRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const info = infoRef.current;
        const tit = titRef.current;

        const infoList = info.querySelectorAll('ul li');
        const txtLine = info.querySelectorAll('.line');

        // gsap.set(section, {backgroundColor: theme.color.black});
        // gsap.set(h2, {yPercent: 0, opacity: 1, color: theme.color.white});
        // gsap.set(infoList, {xPercent: 0, opacity: 1, color: theme.color.white});

        let ctx = gsap.context(() => {
            const ani = gsap.timeline();

            gsap.set(infoList, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

            ani.to(infoList, {ease: "none", stagger: 0.1, duration: 2, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",})
                .to(txtLine, {width: "100%"} );

            ScrollTrigger.create({
                animation: ani,
                trigger: section,
                start: "top 50%",
                end: "top 50%",
                scrub: 1,
            });

        }, sectionRef);
        return () => ctx.revert();

    }, []);

    return (
        <Section className="sec-03" ref={sectionRef}>
            <Inner className="inner">
                <InfoCon ref={infoRef}>
                    <ContactTxt className="contact-txt">
                        {contactInfo && contactInfo.map(({phone, email}, idx) => (
                            <li key={idx}>
                                {phone && <Link to={`tel:${phone}`}>+{phone} <span className="line"></span> </Link>}
                                {email && <Link to={`mailto:${email}`}>{email} <span className="line"></span></Link>}
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
                <TitBox ref={titRef}>
                    <p>안녕하세요. 프론트엔드 개발자 최승연입니다. 좋은 동료들과 재미있게 일하고 싶습니다!</p>
                    <h2>Get in <br/> Touch ME</h2>
                </TitBox>
            </Inner>
        </Section>
    )
}

export default MainContact;