import {contactInfo, img, infoLink} from "../recoil/atoms";
import {Link} from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import Text from "../styles/Text";
import {vw} from "../utils/common";

const Section = styled.section`
    position: relative;
    padding: 200px 0 150px;

    ${({theme}) => theme.small`
        padding: ${vw(200)} 0 ${vw(150)};
    `};
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    min-height: calc(100vh - 350px);

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
        min-height: calc(100vh - ${vw(350)});
    `};
`;
const TitBox = styled.div`
    padding-bottom: 100px;
    width: fit-content;
    color: ${theme.color.gray2};
    
    h2{
        font-family: 'Playfair Display', serif;
        font-size: 120px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 1.2;
    }
    p{
        margin-top: 20px;
        width: 60%;
        font-size: 18px;
        line-height: 1.6;
        word-break: keep-all;
    }

    ${({ theme }) => theme.medium`
        h2{
            font-size: 100px;
        }
    `};

    ${({theme}) => theme.medium`
        // padding-top: 0;
        padding-bottom: 100px;
        p{
            display: none;
        }
    `};

    ${({theme}) => theme.small`
        padding-bottom: ${vw(150)};
        
        h2{
            font-size: ${vw(116)};
        }
        
        p{
            margin-top: ${vw(30)};
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
`;
const ContactTxt = styled.ul`
    overflow: hidden;
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
            bottom: ${vw(-5)};
            height: ${vw(5)};
        `};
    }

    ${({theme}) => theme.large`
        font-size: 76px;
    `};

    ${({theme}) => theme.sMedium`
        font-size: 62px;
    `};

    ${({theme}) => theme.small`
        font-size: ${vw(60)};
        
        li{
            margin-bottom: ${vw(20)};
        }
    `};
`;
const LinkTxt = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-top: 70px;
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
        margin-top: ${vw(70)};
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

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const info = infoRef.current;
        const tit = titRef.current;

        const infoList = info.querySelectorAll('ul li');
        const contactTxt = info.querySelectorAll('.contact-txt');
        const linkTxt = info.querySelectorAll('.link-txt');
        const txtLine = info.querySelectorAll('.line');

        let ctx = gsap.context(() => {
            const ani = gsap.timeline({ease: "none",});

            ani.to(section, {backgroundColor: theme.color.white, duration: 5,})
                .to(txtLine, {width: "100%", backgroundColor: theme.color.black, delay: 0.1});

            ScrollTrigger.matchMedia({
                "(min-width: 721px)": function() {
                    ScrollTrigger.create({
                        animation: ani,
                        trigger: section,
                        start: "top top",
                        end: "center 100%",
                        scrub: 1
                    });
                },
                "(max-width: 720px)": function() {
                    ScrollTrigger.create({
                        animation: ani,
                        trigger: section,
                        start: "top 20%",
                        end: "center 100%",
                        scrub: 1,
                    });
                },
            });

            // let ani = gsap.timeline({
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: section,
            //         start: "10% 50%",
            //         end: "center 100%",
            //         scrub: 1,
            //     }
            // });

            // ani
                // .to(section, {backgroundColor: theme.color.white, duration: 5, delay: 5})
                // .to(contactTxt, {ease: "none", stagger: 0.2, duration: 10, opacity: 1, xPercent: 0,})
                // .to(txtLine, {width: "100%"} )
                // .to(contactTxt, {stagger: 0.2, duration: 5, opacity: 1, xPercent: 0, color: theme.color.white})
                // .to(txtLine, {width: "100%", backgroundColor: theme.color.white})
                // .to(contactTxt, {stagger: 0.2, duration: 5, opacity: 1, xPercent: 0, color: theme.color.black})
                // .to(txtLine, {width: "100%", backgroundColor: theme.color.white});
                // .to(linkTxt, {color: theme.color.white})

        }, sectionRef);
        return () => ctx.revert();

    }, []);

    return (
        <Section className="sec-03" ref={sectionRef}>
            <Inner className="inner">
                <TitBox ref={titRef}>
                    <h2>Get in <br/> Touch ME</h2>
                    <p>안녕하세요. 프론트엔드 개발자 최승연입니다. 좋은 동료들과 재미있게 일하고 싶습니다!</p>
                </TitBox>
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

            </Inner>
        </Section>
    )
}

export default MainContact;