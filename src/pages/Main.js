import {useState} from "react";
import Layout from "../components/_inc/Layout";

import {SecKv, Sec01, TxtBox, Title2, Tab, Sec02, Sec03} from "../styles/main";
import {img, projectList} from "../recoil/atoms";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {Link} from "react-router-dom";

function Main(){
    const work = projectList.work;
    const projectWork = Object.values(work).filter((el, idx) => el.thumbImg);
    const personal = projectList.personal;
    const design = projectList.design;
    const [data, setData] = useState(projectWork);

    const onClick = (e) => {
        const $target = e.target;
        const $targetList = $target.parentNode.childNodes;
        let text = $target.innerText.toLowerCase();

        $targetList.forEach((el) => el.classList.remove('active'));
        $target.classList.add('active');

        if(text === 'work'){
            setData(projectWork);
        } else if(text === 'personal'){
            setData(personal);
        }
    }

    return(
        <>
            <Layout header={{active: -1}}>
                <SecKv>
                    <h2>안녕하세요. <br/> 프론트엔드 개발자 <br/> 최승연 입니다</h2>
                    <img src={`${img}/main_visual.jpg`} alt="" />
                </SecKv>

                <Sec01>
                    <TxtBox>
                        <Title2>Project</Title2>
                        <Tab onClick={onClick}>
                            <li className="active">work</li>
                            <li>personal</li>
                        </Tab>
                    </TxtBox>
                    <Swiper
                        slidesPerView={'auto'}
                        modules={[Navigation,  Pagination]}
                        // navigation={true}
                        pagination={{type: 'fraction'}}
                    >
                        {data && Object.values(data).map(({client, name, period, thumbImg}, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="txt">
                                    <h4>[{client}] <br/>{name}</h4>
                                    <p>{period}</p>
                                </div>
                                <img src={`${img}/${thumbImg}`} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Sec01>

                <Sec02>
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

                                {/*<ul>*/}
                                {/*    <li key={idx}>*/}
                                {/*        <span>{period}</span>*/}
                                {/*        <p><strong>[{client}]</strong> {name}</p>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
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

                <Sec03>
                    <Title2>Contact</Title2>
                    <div className="txt-box">
                        <p>
                            안녕하세요. <br/>
                            프론트엔드 개발자 최승연입니다. <br/>
                            좋은 동료들과 재미있게 일하고 싶습니다. <br/><br/>
                            연락주세요!
                        </p>
                        <div className="info">
                            <ul className="txt">
                                <li>
                                    <Link to="tel:010-3030-1734">+010.3030.1734</Link>
                                </li>
                                <li>
                                    <Link to="mailto:sseung0000@naver.com">sseung0000@naver.com</Link>
                                </li>
                            </ul>

                            <ul className="link">
                                <li>
                                    <Link to="https://seunggry.notion.site/seunggry/Seung-Yeon-Choi-0ed5ec339a5e4d1fbdc8ff958980072c">Notion</Link>
                                </li>
                                <li>
                                    <Link to="https://github.com/sseunggry">Github</Link>
                                </li>
                                <li>
                                    <Link to="">Resume</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Sec03>
            </Layout>
        </>
    )
}

export default Main;