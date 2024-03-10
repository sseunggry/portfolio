import Layout from "../components/_inc/Layout";
import {Link} from "react-router-dom";
import {contactInfo, img, infoLink} from "../recoil/atoms";
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import Text from "../styles/Text";
import theme from "../styles/theme";
import {vw} from "../utils/common";

const ContactCon = styled.div`
    min-height: 100vh;

    ${({theme}) => theme.small`
        // padding-top: ${vw(120)};
    `};
`;
const Inner = styled.div`
    margin: 0 auto;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};

    ${({theme}) => theme.small`        
        padding: ${vw(100)} ${vw(40)} ${vw(200)};
    `};
`;
const IconVideo = styled.div`
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background-color: ${theme.color.black};
    
    video{
        width: 100%;
        height: 100%;
    }
    
    ${({theme}) => theme.small`
        width: ${vw(360)};
        height: ${vw(360)};
    `};
`;
const TitBox = styled.div`
    position: relative;
    padding: 150px 0;
    
    h2{
        position: relative;
        text-align: center;
        z-index: 2;
    }

    ${({theme}) => theme.small`
        padding: ${vw(150)} 0;
    `};
`;
const TxtList = styled.ul`
    position: relative;
    margin-top: 50px;
    z-index: 2;
    
    li{
        overflow: hidden;
        font-size: 18px;
        line-height: 2;
        color: ${theme.color.gray2};
        text-align: center;
        word-break: keep-all;
        
        &:first-of-type{
            margin-bottom: 20px;
        }
        &:last-of-type{
            margin-top: 20px;
        }
        
        span{
            display: inline-block;
        }
    }
    
    ${({theme}) => theme.small`
        margin-top: ${vw(50)};
        
        li{
            font-size: ${vw(28)};
            
            &:first-of-type{
                margin-bottom: ${vw(30)};
            }
            &:last-of-type{
                margin-top: ${vw(30)};
            }
        }
    `};
`;
const ImgBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.color.gray5};
    z-index: -1;
`;
const InfoBox = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    width: fit-content;

    ${({theme}) => theme.large`
        margin-left: 0;
        width: 100%;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(150)} 0;
    `};
`;
const ContactTxt = styled.ul`
    li {
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
        font-size: 80px;
        font-weight: 500;
        text-align: center;

        ${({theme}) => theme.sLarge`
            font-size: 72px;
        `};
        
        ${({theme}) => theme.small`
            margin-bottom: ${vw(30)};
            font-size: ${vw(60)};
        `};
        
        a{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .line {
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 0;
        height: 4px;
        background-color: ${theme.color.white};

        ${({theme}) => theme.small`
            bottom: ${vw(-4)};
            height: ${vw(4)};
        `};
    }
`;
const LinkTxt = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 150px;
  
    li{
        overflow: hidden;
        margin-right: 80px;
        font-size: 30px;
        font-weight: 500;

        a{
            display: block;
        }
      
        &:last-of-type{
          margin-right: 0;
        }

        ${({theme}) => theme.small`
            margin-right: ${vw(60)};
            font-size: ${vw(40)};
        `};
    }

    ${({theme}) => theme.small`
        margin-top: ${vw(150)};
    `};
`;

function Contact() {
    const sectionRef = useRef(null);
    const txtListRef = useRef(null);
    const contactRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const txtBox = txtListRef.current;
        const contactBox = contactRef.current;
        const linkBox = linkRef.current;

        const pageTit = section.querySelector('[name="tit1"] span');
        const video = section.querySelector('.video');
        const txtList = txtBox.querySelectorAll('li span');
        const imgBox = section.querySelector('.img-box');

        const contactList = contactBox.querySelectorAll('li');
        const linkList = linkBox.querySelectorAll('li a');

        let ctx = gsap.context(() => {
            gsap.set(pageTit, {yPercent: 110});
            gsap.set(imgBox, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(txtList, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(video, {opacity: 0});

            const ani = gsap.timeline({
                ease: "cubic-bezier(.19,1,.22,1)"
            });
            ani.to(imgBox, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",})
                .to(video, {opacity: 1})
                .to(pageTit, {opacity: 1, yPercent: 0})
                .to(txtList, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", stagger: 0.1});

            gsap.set(contactList, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",});
            gsap.to(contactList, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    start: "center 50%",
                    end: "center 50%",
                    scrub: 1,
                }
            });

            gsap.set(linkList, {opacity: 0, yPercent: 110});
            gsap.to(linkList, {opacity: 1, yPercent: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "70% 80%",
                    end: "70% 50%",
                    scrub: 1,
                }
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <Layout header={{active: 2}}>
            <ContactCon ref={sectionRef}>
                <TitBox>
                    <Inner>
                        <IconVideo className="video">
                            <video autoPlay loop muted playsInline>
                                <source type="video/mp4"  src={`${img}/contact_icon.mp4`} />
                            </video>
                        </IconVideo>
                        <Text name="tit1" className="mask">
                            <span>Contact <em className="outfit">ME</em></span>
                        </Text>
                        <TxtList ref={txtListRef}>
                            <li><span>안녕하세요! 저는 ‘퍼블리셔 최승연’입니다.</span></li>
                            <li><span>저는 긍정적이고 활발하며 맡은 일에 최선을 다하는 성실한 성격입니다.</span></li>
                            <li><span>또한 사람들과 잘 지내며 다양한 상황에 유연하게 대처하는 능력을 가졌습니다.</span></li>
                            <li><span>함께 일할 동료와 회사를 찾고 있습니다.</span></li>
                            <li><span>언제든지 연락주세요!</span></li>
                        </TxtList>
                        <ImgBox className="img-box">
                            <img src={`${img}/contact_bg.jpg`}  alt=""/>
                        </ImgBox>
                    </Inner>
                </TitBox>
                <InfoBox>
                    <Inner>
                        <ContactTxt ref={contactRef}>
                            {contactInfo && contactInfo.map(({phone, email}, idx) => (
                                <li key={idx}>
                                    {phone &&
                                        <Link to={`tel:${phone}`}>
                                            +{phone}
                                            <span className="line"></span>
                                        </Link>
                                    }
                                    {email &&
                                        <Link to={`mailto:${email}`}>
                                            {email}
                                            <span className="line"></span>
                                        </Link>
                                    }
                                </li>
                            ))}
                        </ContactTxt>
                        <LinkTxt ref={linkRef}>
                            {infoLink && infoLink.map(({notion, github}, idx) => (
                                <li key={idx}>
                                    {notion && <Link to={notion}>Notion</Link>}
                                    {github && <Link to={github}>Github</Link>}
                                </li>
                            ))}
                            <li><Link to="">Resume</Link></li>
                        </LinkTxt>
                    </Inner>
                </InfoBox>
            </ContactCon>
        </Layout>
    )
}

export default Contact;