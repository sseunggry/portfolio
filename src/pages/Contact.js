import Layout from "../components/_inc/Layout";
import {Title1} from "../styles/common";
import {Link} from "react-router-dom";
import {contactInfo, infoLink} from "../recoil/atoms";
import styled from "styled-components";
import {gsap} from "gsap";
import {useEffect, useRef} from "react";
import Text from "../styles/Text";

const ContactCon = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;
`;
const Info = styled.div`
    margin-top: 200px;
    margin-left: auto;
    width: fit-content;
`;
const TxtBox = styled.ul`
    li{
        margin-bottom: 0;
        font-size: 80px;
        font-weight: 500;
    }
`;
const LinkList = styled.ul`
    display: flex;
    margin-top: 60px;
  
    li{
        margin-right: 30px;
        font-size: 30px;
        font-weight: 500;
      
        &:last-of-type{
          margin-right: 0;
        }
    }
`;

function Contact() {
    const conRef = useRef(null);

    useEffect(() => {
        const con = conRef.current;

        gsap.set(con, {opacity: 0, yPercent: 40});
        gsap.to(con, {opacity: 1, yPercent: 0});

    }, []);

    return (
        <Layout>
            <ContactCon ref={conRef}>
                <Text name="tit1">Contact</Text>
                <Info>
                    <TxtBox>
                        {contactInfo && contactInfo.map(({phone, email}, idx) => (
                            <li key={idx}>
                                {phone && <Link to={`tel:${phone}`}>+{phone}</Link>}
                                {email && <Link to={`mailto:${email}`}>{email}</Link>}
                            </li>
                        ))}
                    </TxtBox>
                    <LinkList>
                        {infoLink && infoLink.map(({notion, github}, idx) => (
                            <li key={idx}>
                                {notion && <Link to={notion}>Notion</Link>}
                                {github && <Link to={github}>Github</Link>}
                            </li>
                        ))}
                        <li><Link to="">Resume</Link></li>
                    </LinkList>
                </Info>
            </ContactCon>
        </Layout>
    )
}

export default Contact;