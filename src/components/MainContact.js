import {Title2} from "../styles/common";
import {contactInfo, infoLink} from "../recoil/atoms";
import {Link} from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

const Section = styled.section`
    position: relative;
    padding: 120px 0 0;
    //height: 100vh;
    //box-sizing: border-box;
     background-color: ${theme.color.black};
    //background-color: ${theme.color.white};
`;
const Inner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;
const TxtBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 130px 0 320px;
`;
const TxtDesc = styled.div`
    p{
        overflow: hidden;
        margin-right: 50px;
        width: 360px;
        font-size: 20px;
        line-height: 1.6;
        
        span{
            display: block;
        }
    }
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
`;
const DecoTxt = styled.p`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 40px;
    font-size: 120px;
    font-weight: 900;
    color: ${theme.color.black};
    letter-spacing: 6px;
    text-shadow: -2px 0 #ddd, 0 2px #ddd, 2px 0 #ddd, 0 -2px #ddd;

    span{
        white-space: nowrap;
    }
`;

function MainContact(){
    const sectionRef = useRef(null);
    const descRef = useRef(null);
    const infoRef = useRef(null);
    const decoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const desc = descRef.current;
        const info = infoRef.current;
        const deco = decoRef.current;
        const h3 = section.querySelector("h3");
        // const descList = desc.querySelectorAll("p span");
        const infoList = info.querySelectorAll("ul li");
        // Object.values(descList).map((el) => el.style.height = `${el.clientHeight}px`);

        gsap.set(h3, {yPercent: 20, opacity: 0,});
        gsap.set(desc, {yPercent: 20, opacity: 0});
        gsap.set(infoList, {xPercent: 20, opacity: 0});

        const ani = gsap.timeline();
        ani.to(section, {backgroundColor: theme.color.white})
        ScrollTrigger.create({
            animation: ani,
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // markers: true
        });

        const ani2 = gsap.timeline();
        ani2.to(h3, {yPercent: 0, opacity: 1})
            .to(desc, {yPercent: 0, opacity: 1})
            .to(infoList, {xPercent: 0, opacity: 1});

        ScrollTrigger.create({
            animation: ani2,
            trigger: section,
            start: "top top",
            end: "center center",
            scrub: 1,
        });

        gsap.set(deco, {opacity: 0});
        gsap.to(deco, {
            xPercent: -20,
            opacity: 1,
            color: theme.color.white,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "center center",
                scrub: 1,
            }
        });

        return () => {
            ani.kill();
            // ani2.kill();
        }
    }, []);

    let phraseTxt = "안녕하세요\n프론트엔드 개발자 최승연입니다.\n좋은 동료들과 재미있게 일하고 싶습니다.\n연락주세요!";
    phraseTxt= phraseTxt.split("\n");

    return (
        <Section className="sec-03" ref={sectionRef}>
            <Inner>
                <Title2>Contact</Title2>
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
            </DecoTxt>
        </Section>
    )
}

export default MainContact;