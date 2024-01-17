import Layout from "../components/_inc/Layout";
import {Link} from "react-router-dom";
import {contactInfo, infoLink} from "../recoil/atoms";
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import Text from "../styles/Text";
import theme from "../styles/theme";
import {vw} from "../utils/common";

const ContactCon = styled.div`
    padding-top: 80px;
`;
const Inner = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};

    ${({theme}) => theme.small`
        padding-left: ${vw(40)};
        padding-right: ${vw(40)};
    `};
`;
const Info = styled.div`
    margin-top: 200px;
    margin-left: auto;
    width: fit-content;

    ${({theme}) => theme.large`
        margin-left: 0;
        width: 100%;
    `};
`;
const TxtBox = styled.ul`
    li {
        position: relative;
        margin-bottom: 20px;
        width: fit-content;
        font-size: 80px;
        font-weight: 500;

        ${({theme}) => theme.large`
            margin-bottom: 20px;
            font-size: 70px;
        `};

        ${({theme}) => theme.medium`
            margin-bottom: 20px;
            font-size: 50px;
        `};

        ${({theme}) => theme.small`
            margin-bottom: ${vw(30)};
            font-size: ${vw(54)};
        `};
        
        a{
            display: block;
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
const LinkList = styled.ul`
    display: flex;
    margin-top: 60px;
  
    li{
        margin-right: 30px;
        width: fit-content;
        font-size: 30px;
        font-weight: 500;

        a{
            display: block;
        }
      
        &:last-of-type{
          margin-right: 0;
        }

        ${({theme}) => theme.small`
            margin-right: ${vw(30)};
            font-size: ${vw(30)};
        `};
    }
`;

const Info2 = styled.div`
    padding: 80px 0;
`;

function Contact() {
    const sectionRef = useRef(null);
    const txtRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger.saveStyles(".mobile, .desktop");

        const section = sectionRef.current;
        const txtBox = txtRef.current;
        const linkBox = linkRef.current;

        const tit = section.querySelector('h2');
        const txtList = txtBox.querySelectorAll('li');
        const txtLine = txtBox.querySelectorAll('.line');
        const linkList = linkBox.querySelectorAll('li a');

        ScrollTrigger.matchMedia({
            "(min-width: 720px)": function() {
                const ani = gsap.timeline();
                gsap.set(section, {background: theme.color.white});
                gsap.set(txtLine, {width: 0});

                ani.to(section, {background: theme.color.black})
                    .to(tit, {color: theme.color.white})
                    .to(txtList, {color: theme.color.white, stagger: 0.2, duration: 0.8, transform: 'rotate(-10deg)'}, 'motion')
                    .to(txtLine, {width: '100%', stagger: 0.2, duration: 0.8, transform: 'rotate(-1deg)' }, 'motion')
                    .to(linkList, {color: theme.color.white});

                ScrollTrigger.create({
                    animation: ani,
                    trigger: section,
                    start: "10% 10%",
                    end: "top 10%",
                    endTrigger: tit,
                    scrub: 1,
                });
            },

            "(max-width: 719px) and (max-height: 959px)": function() {
                const ani = gsap.timeline();
                gsap.set(section, {background: theme.color.white});
                gsap.set(txtLine, {width: 0});

                ani.to(section, {background: theme.color.black})
                    .to(tit, {color: theme.color.white})
                    .to(linkList, {color: theme.color.white});

                ScrollTrigger.create({
                    animation: ani,
                    trigger: section,
                    start: "10% 10%",
                    end: "top 10%",
                    endTrigger: tit,
                    scrub: 1,
                });

                const ani2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: txtList,
                        start: "top 50%",
                        end: "bottom bottom",
                        scrub: 1,
                        markers: true
                    }
                })
                ani2.to(txtList, {color: theme.color.white, stagger: 0.2, duration: 0.8})
                    .to(txtLine, {width: '100%', stagger: 0.2, duration: 0.8})
                    .to(linkList, {color: theme.color.white});
            },

            "all": function() {

            }
        });

        // const ani = gsap.timeline();
        // gsap.set(section, {background: theme.color.white});
        // gsap.set(txtLine, {width: 0});
        //
        // ani.to(section, {background: theme.color.black})
        //     .to(tit, {color: theme.color.white})
        //     .to(txtList, {color: theme.color.white, stagger: 0.2, duration: 0.8, transform: 'rotate(-10deg)'}, 'motion')
        //     .to(txtLine, {width: '100%', stagger: 0.2, duration: 0.8, transform: 'rotate(-1deg)' }, 'motion')
        //     .to(linkList, {color: theme.color.white});
        //
        // ScrollTrigger.create({
        //     animation: ani,
        //     trigger: section,
        //     start: "10% 10%",
        //     end: "top 10%",
        //     endTrigger: tit,
        //     scrub: 1,
        // });

    }, []);

    return (
        <Layout header={{active: 2}}>
            <ContactCon ref={sectionRef}>
                <Inner>
                    <Text name="tit1">Contact</Text>
                    <Info>
                        <TxtBox ref={txtRef}>
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
                        </TxtBox>
                        <LinkList ref={linkRef}>
                            {infoLink && infoLink.map(({notion, github}, idx) => (
                                <li key={idx}>
                                    {notion && <Link to={notion}>Notion</Link>}
                                    {github && <Link to={github}>Github</Link>}
                                </li>
                            ))}
                            <li><Link to="">Resume</Link></li>
                        </LinkList>
                    </Info>
                    <Info2>
                        많은 관심과 연락 주세요!
                    </Info2>
                </Inner>
            </ContactCon>
        </Layout>
    )
}

export default Contact;