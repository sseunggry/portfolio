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
    padding: 150px 0;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
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
    padding-top: 100px;
    width: fit-content;
    color: ${theme.color.gray2};
    
    p{
        width: 60%;
        font-size: 18px;
        word-break: keep-all;
    }
    h2{
        font-family: 'Playfair Display', serif;
        font-size: 120px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 1.2;
    }

    ${({ theme }) => theme.medium`
        h2{
            font-size: 100px;
        }
    `};

    ${({theme}) => theme.medium`
        padding-top: 0;
        padding-bottom: 100px;
        p{
            display: none;
        }
    `};

    ${({theme}) => theme.small`
        padding-bottom: ${vw(150)};
        
        p{
            width: 100%;
            font-size: ${vw(28)};
        }
    `};
`;
const InfoCon = styled.div`
    li{
        a{
            position: relative;
        }
    }

    ${({theme}) => theme.medium`
        order: 1;
    `};
`;
const ContactTxt = styled.ul`
    overflow: hidden;
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
        const contactTxt = info.querySelectorAll('.contact-txt');
        const linkTxt = info.querySelectorAll('.link-txt');
        const txtLine = info.querySelectorAll('.line');

        let ctx = gsap.context(() => {
            const ani = gsap.timeline();

            gsap.set(contactTxt, {xPercent: 100});
            // gsap.set(linkTxt, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

            ani.to('.wrap', {backgroundColor: theme.color.white, duration: 5}, )
                .to(contactTxt, {ease: "none", stagger: 0.2, duration: 10, opacity: 1, xPercent: 0, color: theme.color.white})
                .to(txtLine, {width: "100%", backgroundColor: theme.color.white} )
                // .to(linkTxt, {ease: "none", stagger: 0.5, duration: 5, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})

            ScrollTrigger.create({
                animation: ani,
                trigger: section,
                start: "top 40%",
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
                    <LinkTxt className="link-txt">
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