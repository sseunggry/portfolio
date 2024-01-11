import {useEffect, useRef, useState} from "react";
import Layout from "../components/_inc/Layout";
import {TweenMax, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {SecKv, Sec01, TxtBox, Tab, Sec02, Sec03} from "../styles/home";
import {contactInfo, design, img, infoLink, personal, projectWork, work} from "../recoil/atoms";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {Link} from "react-router-dom";
import {Title2} from "../styles/common";

function Home(){
    // const [data, setData] = useState(projectWork);
    const appRef = useRef();
    const data = [...Object.values(work).filter((el) => el.link), ...Object.values(personal).filter((el) => el.link)];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const h2 = ".sec-kv h2";
        const img = ".sec-kv img";
        const sec03Tit = ".sec-03 h3";
        const sec03Txt = ".sec-03 .txt-box";
        const sec03Info = ".sec-03 .info";
        const decoTxt = ".sec-03 .deco-txt";

        const sec03TxtList = document.querySelectorAll(".sec-03 .txt-box .desc p");


        let totalWidth = 0, totalHeight = 0;
        const sec01Width = document.querySelector(".sec-01 .list").offsetWidth;
        document.querySelectorAll(".sec-01 .list li").forEach((el) => totalWidth += el.offsetWidth);

        const sec02Height = document.querySelector(".sec-02 .right").offsetHeight;
        document.querySelectorAll(".sec-02 .right dl").forEach((el) => totalHeight += el.offsetHeight);
        // console.log(sec02Height, totalHeight, totalHeight-sec02Height);


        gsap.set(h2, {scale: 1.5, yPercent: 50, opacity: 1});
        gsap.set(img, {scale: 0.5, top: "30%", opacity: 1});
        // gsap.set(".sec-01", {translateX : 0});
        // gsap.set(".sec-02", {});
        gsap.set(sec03Tit, {opacity : 0, yPercent: 30});
        gsap.set(sec03Txt, {opacity : 0, yPercent: 20});
        gsap.set(sec03Info, {opacity : 0, yPercent: 20});
        // gsap.set(decoTxt, {translateX: 50});

        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".sec-kv",
                    start: "top top",
                    end: "bottom+=100%",
                    scrub: 2,
                    pin: true,
                }
            })
                .to(h2, {
                    scale: 1, yPercent: 0, opacity: 1
                })
                .to(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top center",
                        scrub: 2,
                    },
                    scale: 1, top: 0, opacity: 1,
                })
                .to(h2, {
                    color: "#fff",
                });

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".sec-01",
                    start: "top top",
                    // end: "bottom bottom",
                    end: `bottom+=${totalWidth-sec01Width}`,
                    scrub: 2,
                    pin: true,
                }
            })
                .to(".sec-01", {
                    x: -(totalWidth-sec01Width),
                })

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".sec-02",
                    start: "top top",
                    end: `bottom+=${sec02Height}`,
                    scrub: 2,
                    pin: true,
                }
            })
                .to(".sec-02 .right", {
                    y: -(totalHeight-sec02Height)
                });

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".sec-03",
                    start: "top center",
                    end: "50% center",
                    scrub: 2,
                }
            })
                .to(sec03Tit, {
                    opacity: 1, yPercent: 0,
                })
                .to(sec03Txt, {
                    opacity: 1, yPercent: 0
                })
                .to(sec03Info, {
                    opacity: 1, yPercent: 0
                });

        }, appRef);

        return () => ctx.revert();

    }, []);

    return(
        <div ref={appRef}>
            <Layout header={{active: -1}} >
                <SecKv className="sec-kv">
                    <h2>안녕하세요. <br/> 프론트엔드 개발자 <br/> 최승연 입니다</h2>
                    <img src={`${img}/main_visual.jpg`} alt="" />
                </SecKv>

                <Sec01 className="sec-01">
                    <Title2>Project</Title2>
                    <ul className="list">
                        {data && Object.values(data).map(({client, name, period, thumbImg}, idx) => (
                            <li key={idx}>
                                <div className="txt">
                                    <h4>[{client}] <br/>{name}</h4>
                                    <p>{period}</p>
                                </div>
                                <img src={`${img}/${thumbImg}`} alt="" />
                            </li>
                        ))}
                    </ul>

                </Sec01>

                <Sec02 className="sec-02">
                    <div className="left">
                        <Title2>career</Title2>
                        <dl>
                            <dt>Publisher</dt>
                            <dd>23.09 ~ 재직중 (2년 6개월)</dd>
                        </dl>
                        <dl>
                            <dt>Designer</dt>
                            <dd>21.05 ~ 23.01 (2년 9개월)</dd>
                        </dl>
                    </div>
                    <div className="right">
                        <dl>
                            <dt>Publishing</dt>
                            <dd>
                                {work.map(({client, name, period, link}, idx) => (
                                    <p key={idx}>
                                        <span className="period">{period}</span>
                                        <span><strong>[{client}]</strong> {name}</span>
                                        {link && <Link to={link} target="_blank">{link}</Link>}
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
                                        {link && <Link to={link} target="_blank">{link}</Link>}
                                    </p>
                                ))}
                            </dd>
                        </dl>
                    </div>
                </Sec02>

                <Sec03 className="sec-03">
                    <Title2>Contact</Title2>
                    <div className="txt-box">
                        <div className="desc">
                            <p>안녕하세요.</p>
                            <p>프론트엔드 개발자 최승연입니다.</p>
                            <p>좋은 동료들과 재미있게 일하고 싶습니다. </p>
                            <p>연락주세요!</p>
                        </div>
                        <div className="info">
                            <ul className="txt">
                                {contactInfo && contactInfo.map(({phone, email}, idx) => (
                                    <li key={idx}>
                                        {phone && <Link to={`tel:${phone}`}>+{phone}</Link>}
                                        {email && <Link to={`mailto:${email}`}>{email}</Link>}
                                    </li>
                                ))}
                            </ul>
                            <ul className="link">
                                {infoLink && infoLink.map(({notion, github}, idx) => (
                                    <li key={idx}>
                                        {notion && <Link to={notion}>Notion</Link>}
                                        {github && <Link to={github}>Github</Link>}
                                    </li>
                                ))}
                                <li>
                                    <Link to="">Resume</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="deco-txt">
                        <span>CHOI SEUNG YEON  </span>
                        <span>CHOI SEUNG YEON</span>
                    </p>
                </Sec03>
            </Layout>
        </div>
    )
}

export default Home;