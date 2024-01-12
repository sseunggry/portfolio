import {design, work} from "../recoil/atoms";
import styled from "styled-components";
import {Title2} from "../styles/common";
import theme from "../styles/theme";
import {Link} from "react-router-dom";
import Text from "../styles/Text";

const Section = styled.section`
    display: flex;
    overflow: hidden;
    height: 100vh;
`;
const LeftCon = styled.div`
    padding: 140px;
    flex-shrink: 0;
    width: 43%;
    height: 100%;
    background-color: ${theme.color.black};
    
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
            opacity: 0.5;
        }
    }
`;
const RightCon = styled.div`
    padding: 80px 90px;
    //overflow: hidden auto;
    width: 100%;
    //padding: 80px 90px;

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
`;

function MainCareer(){
    return (
        <Section className="sec-02">
            <LeftCon>
                <Text name="tit2" color={theme.color.white}>career</Text>
                <dl>
                    <dt>Publisher</dt>
                    <dd>23.09 ~ 재직중 (2년 6개월)</dd>
                </dl>
                <dl>
                    <dt>Designer</dt>
                    <dd>21.05 ~ 23.01 (2년 9개월)</dd>
                </dl>
            </LeftCon>
            <RightCon>
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
            </RightCon>
        </Section>
    )
}

export default MainCareer;