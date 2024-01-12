import {Title2} from "../styles/common";
import {contactInfo, infoLink} from "../recoil/atoms";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Section = styled.section`
    margin: 0 auto;
    padding-top: 120px;
    max-width: 1440px;
    min-height: 100vh;
`;
const TxtBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 130px 0 320px;
`;
const TxtDesc = styled.div`
    p{
        margin-right: 50px;
        flex-shrink: 0;
        width: 360px;
        font-size: 20px;
        line-height: 1.6;
    }
`;
const InfoCon = styled.div`
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
            //text-decoration: underline;
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
    color: #fff;
    letter-spacing: 6px;
    text-shadow: -2px 0 #ddd, 0 2px #ddd, 2px 0 #ddd, 0 -2px #ddd;

    span{
        white-space: nowrap;
    }
`;

function MainContact(){
    return (
        <Section className="sec-03">
            <Title2>Contact</Title2>
            <TxtBox>
                <TxtDesc>
                    <p>안녕하세요.</p>
                    <p>프론트엔드 개발자 최승연입니다.</p>
                    <p>좋은 동료들과 재미있게 일하고 싶습니다. </p>
                    <p>연락주세요!</p>
                </TxtDesc>
                <InfoCon>
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
            <DecoTxt>
                <span>CHOI SEUNG YEON  </span>
                <span>CHOI SEUNG YEON</span>
            </DecoTxt>
        </Section>
    )
}

export default MainContact;