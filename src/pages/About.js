import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Text from "../styles/Text";

const AboutCon = styled.div`
    padding: 150px 0;
  
    h2{
        margin: 0 auto;
        max-width: 1440px;
    }
`;
const InfoTxt = styled.div`
    margin: 100px auto 200px;
    max-width: 1440px;
    padding-left: 30%;
    //padding-left: 20%;
    font-size: 60px;
    font-weight: 200;
    line-height: 1.6;
    word-break: keep-all;
  
    p{
      span{
          display: inline-block;
      }
    }
`;

const Feature = styled.div`
    padding: 140px 240px;
    //display: flex;
    //justify-content: space-between;
    background-color: ${theme.color.black};

    .tit{
        h3{
            margin-bottom: 40px;
            font-size: 80px;
            font-weight: 700;
            color: ${theme.color.white};
            
            &:last-of-type{
                margin-bottom: 0;
            }
        }
    }
    
    .desc{
        //margin-top: 600px;
        margin: 100px 0 0 auto;
        width: 50%;
        
        p{
            margin-bottom: 30px;
            font-size: 24px;
            font-weight: 100;
            letter-spacing: 0;
            line-height: 1.6;
            color: ${theme.color.white};
            //opacity: 0.4;
        }
    }
`;
const LargeTxt = styled.div`
    margin: 0 auto;
    padding: 200px 0;
    max-width: 1440px;

    
    font-size: 100px;
    font-weight: 700;
    word-break: keep-all;
`;
const Intro = styled.div`
    //margin-top: 140px;
    padding: 200px;
    font-size: 24px;
    font-weight: 300;
    color: ${theme.color.white};
    background-color: ${theme.color.black};
  
    .inner{
        //margin: 0 auto;
        margin-left: auto;
        max-width: 1440px;
        //width: 60%;
    }
  
    p{
        margin-bottom: 40px;
        word-break: keep-all;
        text-align: right;
        line-height: 1.6;
      
        &:last-of-type{
          margin-bottom: 0;
        }
    }
`;

function About(){
    const sectionRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const info = infoRef.current;
        const tit = section.querySelector("h2");
        const infoTxt = info.querySelectorAll("p");
        // const infoSpan = info.querySelectorAll("span");

        infoTxt.forEach((el) => {
            let txtDesc = el.innerText.split('');
            let txtDescList = '';
            txtDesc.map((txt) => txtDescList += `<span>${txt}</span>`);
            el.innerHTML = txtDescList;
        })

        gsap.set(tit, {yPercent: 20, opacity: 0});
        gsap.set(infoTxt, {opacity: 0});

        const ani = gsap.timeline();
        ani.to(tit, {yPercent: 0, opacity: 1})
            .to(infoTxt, {opacity: 1, stagger: 0.1, duration: 0.5});
    });

    return (
        <Layout>
            <AboutCon ref={sectionRef}>
                <Text name="tit1">About</Text>
                <InfoTxt ref={infoRef}>
                    <p>안녕하세요!</p>
                    <p>열정적인 프론트엔드 개발자</p>
                    <p>최승연 입니다.</p>
                </InfoTxt>
                <Feature>
                    <div className="tit">
                        <h3>Passion.</h3>
                        <h3>Sincerity.</h3>
                        <h3>Responsibility.</h3>
                        <h3>Communication.</h3>
                    </div>
                    <div className="desc">
                        <p>
                            저는 열정적으로 일하며, 제가 맡은 업무는 무슨 일이 있어도 끝냅니다. <br/>
                            책임감이 강하고, 성실하여 주어진 일을 완벽하게 끝내는 성격입니다.
                        </p>
                        <p>
                            단 한번도 지각한 적이 없으며, 어떤 업무가 주어져도 일정 안에
                            맞추기 위해 밤을 새서라도 작업을 끝냅니다.
                        </p>
                        <p>
                            어떻게 하면 재사용이 가능하며 다양한 경우에 맞게 공통으로
                            사용이 가능할지를 고려하며 코딩합니다.
                        </p>
                    </div>
                </Feature>
                <LargeTxt>
                    저는 3년차 퍼블리셔 최승연 입니다.
                    저는 인터랙션 및 스크립트에 관심이 많습니다.
                    재사용 가능한 소스를 짜기 위해 생각하며 코딩합니다.

                    {/*<p></p>*/}
                    {/*<p>최승연 입니다.</p>*/}

                    {/*<p>저는 인터랙션 및 스크립트에 관심이 많습니다.</p>*/}
                    {/*<p>재사용 가능한 소스를 짜기 위해 생각하며</p>*/}
                    {/*<p>코딩합니다.</p>*/}
                </LargeTxt>
                <Intro>
                    <div className="inner">
                        <p>
                            저는 2년 9개월 동안 디자이너로 일했고, 제가 디자이너로 일하면서 느꼈던 것은 <br/>
                            디자인은 주관적인 평가로 판단된다는 것 이였습니다.
                        </p>
                        <p>
                            그래서 저는 주관적인 평가가 아닌 객관적인 평가를 받을 수 있는<br/>
                            직업이 하고 싶었습니다. 제가 본 퍼블리셔는 객관적으로 평가되어지는 직업이라고<br/>
                            생각해서 이직을 하게 되었습니다.
                        </p>
                        <p>
                            지금은 퍼블리셔로서 화면에 보여지는 인터랙션과 스크립트 작업에<br/>
                            흥미를 느끼며 재미있게 작업하고 있습니다.
                        </p>
                        <p>
                            앞으로는 퍼블리셔에서 더 나아가 프론트엔드 개발자로 성장하고 싶습니다.
                        </p>
                    </div>
                </Intro>
            </AboutCon>
        </Layout>
    )
}

export default About;