import {img, personal, work} from "../recoil/atoms";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Section = styled.section`
    //overflow: hidden;
    position: relative;
    //display: flex;
    padding: 120px 240px;

    h3{
        margin-bottom: 40px;
        //padding-left: 240px;
    }
    .swiper{
        position: static;
        padding-right: 60px;

        .swiper-slide{
            position: relative;
            margin-right: 30px;
            width: 720px;
            height: auto;

            &:last-child{
                margin-right: 0;
            }

            .txt{
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 0 60px 60px;
                color: ${theme.color.white};

                h4{
                    font-size: 32px;
                }
                p{
                    margin-top: 16px;
                    font-size: 18px;
                }
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .swiper-button-prev{

        }
        .swiper-button-next{

        }
        .swiper-pagination{
            &-fraction{
                left: 12.5%;
                bottom: 10px;
                width: fit-content;
                font-size: 20px;
                color: ${theme.color.gray3};

                .swiper-pagination-current{
                    color: ${theme.color.black};
                }
            }
        }
    }
`;
const List = styled.ul`
    display: flex;

    li{
        position: relative;
        margin-right: 30px;
        flex-shrink: 0;
        width: 640px;
        //width: 720px;
        height: fit-content;

        &:last-child{
            margin-right: 0;
        }
    }
`;
const TxtBox = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 60px 60px;
    color: ${theme.color.white};
    
    p{
        margin-top: 16px;
        font-size: 18px;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function MainProject(){
    const data = [...Object.values(work).filter((el) => el.link), ...Object.values(personal).filter((el) => el.link)];
    const sectionRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const list = listRef.current;
        const listLi = list.querySelectorAll("li");

        let listWidth = 0;
        listLi.forEach((el) => listWidth += el.offsetWidth);

        const ani = gsap.to(section, {
            x: -( listWidth - (list.offsetWidth/2) ),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `bottom+=${listWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        gsap.set(listLi, {xPercent: 20, opacity: 0});
        const ani2 = gsap.to(listLi, {
            stagger: 0.5,
            xPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: listLi,
                start: "top 50%",
                scrub: 1,
            }
        });

        return () => {
            ani.kill();
            ani2.kill();
        };
    })

    return (
        <Section className="sec-01" ref={sectionRef}>
            <Text name="tit2">Project</Text>
            <List className="list" ref={listRef}>
                {data && Object.values(data).map(({client, name, period, thumbImg}, idx) => (
                    <li key={idx}>
                        <TxtBox>
                            <Text name="tit4" color={theme.color.white} fontWeight="400">[{client}] <br/>{name}</Text>
                            <p>{period}</p>
                        </TxtBox>
                        <Img src={`${img}/${thumbImg}`} alt="" />
                    </li>
                ))}
            </List>
        </Section>
    )
}

export default MainProject;