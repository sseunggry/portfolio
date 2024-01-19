import {design, work} from "../recoil/atoms";
import styled from "styled-components";
import theme from "../styles/theme";
import {Link} from "react-router-dom";
import Text from "../styles/Text";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import useWindowSize from "../utils/resize";

const Section = styled.section`
    display: flex;
    //overflow: hidden;
    //height: 100vh;

    ${({theme}) => theme.medium`
        flex-direction: column;
    `};
`;
const TxtBox = styled.div`
    width: 100%;
    height: fit-content;
`;
const LeftCon = styled.div`
    //position: sticky;
    //top: 0;
    padding: 140px;
    flex-shrink: 0;
    width: 43%;
    background-color: ${theme.color.black};

    h3{
        line-height: 1;
    }
    
    dl{
        margin-top: 40px;
        color: ${theme.color.white};

        dt{
            margin-bottom: 8px;
            font-size: 24px;
        }
        dd{
            font-size: 18px;
        }

        &:last-of-type{
            //opacity: 0.5;
            color: ${theme.color.gray2};
        }
    }

    ${({theme}) => theme.large`
        padding: 80px;
    `};

    ${({theme}) => theme.medium`
        width: 100%;
        height: fit-content;
    `};
`;
const RightCon = styled.div`
    padding: 200px 90px;
    flex-shrink: 0;
    width: 57%;
    background-color: ${theme.color.white};
    
    dl{
        display: flex;
        padding-bottom: 100px;

        dt{
            padding-right: 40px;
            flex-shrink: 0;
            width: 280px;
            font-size: 28px;
            text-transform: uppercase;
            font-weight: 700;
        }
        dd{
            font-size: 18px;

            p{
                display: flex;
                flex-direction: column;
                margin-bottom: 40px;

                .period{
                    margin-bottom: 10px;
                    color: ${theme.color.gray2};
                }
                strong{
                    font-weight: 700;
                }

                &:last-of-type{
                    margin-bottom: 0;
                }
            }
        }

        &:last-of-type{
            padding-bottom: 0;
        }
    }

    ${({theme}) => theme.xLarge`
        dl{
            flex-direction: column;
            
            dt{
                margin-bottom: 40px;
            }
        }
    `};

    ${({theme}) => theme.medium`
        width: 100%;
    `};
`;

function MainCareer(){
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    let sectionReSize = useWindowSize('.sec-02');
    let windowReSize = useWindowSize('window');

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const leftCon = leftRef.current;
        const rightCon = rightRef.current;

        const txtBox = leftCon.querySelector('.txt-box');
        const leftTit = leftCon.querySelector('h3');
        const leftTxt = leftCon.querySelectorAll('dl');

        // console.log(windowReSize.width);

        // if(windowReSize > 980) {
        //     const ani = gsap.timeline();
        //     ani.to(leftCon, {width: "43%"});
        //     ScrollTrigger.create({
        //         trigger: section,
        //         start: "top top",
        //         end: `bottom+=${sectionReSize.height}`,
        //         scrub: 1, pin: true, anticipatePin: 1,
        //         markers: true
        //     });
        // } else{
        //     const ani = gsap.timeline();
        //     ani.to(leftCon, {width: "100%"});
        //     ScrollTrigger.create({
        //         trigger: section,
        //         start: "top top",
        //         end: `bottom bottom`,
        //         scrub: 1, pin: false,
        //     });
        // }

        // ScrollTrigger.matchMedia({
        //     "(min-width: 980px)": function() {
        //         const ani = gsap.timeline();
        //         ani.to(leftCon, {width: "43%"});
        //         ScrollTrigger.create({
        //             trigger: section,
        //                 start: "top top",
        //                 end: `bottom bottom`,
        //                 scrub: 1, pin: true, anticipatePin: 1,
        //             markers: true
        //         });
        //     },
        //
        //     "(max-width: 979px)": function() {
        //         const ani = gsap.timeline();
        //         ani.to(leftCon, {width: "100%"});
        //         ScrollTrigger.create({
        //             trigger: section,
        //             start: "top top",
        //             end: "bottom bottom",
        //             scrub: 1, pin: true, anticipatePin: 1,
        //         });
        //     },
        //
        //     "all": function() {
        //         const ani2 = gsap.timeline({
        //             scrollTrigger: {
        //                 trigger: section,
        //                 start: "top top",
        //                 end: "center center",
        //                 scrub: 1,
        //             }
        //         });
        //         gsap.set(leftTit, {opacity: 0});
        //         gsap.set(leftTxt, {opacity: 0});
        //         ani2.to(leftTit, {opacity: 1})
        //             .to(leftTxt, {opacity: 1});
        //     }
        // });

        let ctx = gsap.context(() => {
            const ani = gsap.timeline();
            // ani.to(leftCon, {width: "43%"});


            ScrollTrigger.matchMedia({
                "(min-width: 980px)": function() {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top top",
                        end: `+=${section.offsetHeight}`,
                        scrub: 1,
                        pin: txtBox,
                        // anticipatePin: 1,
                    });
                },
                "(max-width: 979px)" : function() {

                }
            });

            // const ani2 = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: section,
            //         start: "top top",
            //         end: "center center",
            //         scrub: 1,
            //     }
            // });
            // gsap.set(leftTit, {opacity: 0});
            // gsap.set(leftTxt, {opacity: 0});
            // ani2.to(leftTit, {opacity: 1})
            //     .to(leftTxt, {opacity: 1});

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <Section className="sec-02" ref={sectionRef}>
            <LeftCon ref={leftRef}>
                <TxtBox className="txt-box">
                    <Text name="tit2" color={theme.color.white}>career</Text>
                    <dl>
                        <dt>Publisher</dt>
                        <dd>23.09 ~ 재직중 (2년 6개월)</dd>
                    </dl>
                    <dl>
                        <dt>Designer</dt>
                        <dd>21.05 ~ 23.01 (2년 9개월)</dd>
                    </dl>
                </TxtBox>
            </LeftCon>
            <RightCon ref={rightRef}>
                <dl>
                    <dt>Publishing</dt>
                    <dd>
                        {work.map(({client, name, period, link}, idx) => (
                            <p key={idx}>
                                <span className="period">{period}</span>
                                <span><strong>[{client}]</strong> {name}</span>
                                {/*{link && <Link to={link} target="_blank">{link}</Link>}*/}
                            </p>
                        ))}
                    </dd>
                </dl>
                <dl>
                    <dt>Design</dt>
                    <dd>
                        {design.map(({client, name, period, link}, idx) => (
                            <p key={idx}>
                                <span className="period">{period}</span>
                                <span><strong>[{client}]</strong> {name}</span>
                                {/*{link && <Link to={link} target="_blank">{link}</Link>}*/}
                            </p>
                        ))}
                    </dd>
                </dl>
            </RightCon>
        </Section>
    )
}

export default MainCareer;