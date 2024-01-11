import Layout from "../components/_inc/Layout";
import {ContactCon, Info, LinkList, TxtBox} from "../styles/contact";
import {Title1} from "../styles/common";
import {Link} from "react-router-dom";
import {contactInfo, infoLink} from "../recoil/atoms";

function Contact() {
    return (
        <Layout header={{active: 2}}>
            <ContactCon>
                <Title1>Contact</Title1>
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