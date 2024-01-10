import Layout from "../components/_inc/Layout";
import {ContactCon, Info, LinkList, TxtBox} from "../styles/contact";
import {Title1} from "../styles/common";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <Layout header={{active: 2}}>
            <ContactCon>
                <Title1>Contact</Title1>
                <Info>
                    <TxtBox>
                        <li><Link to="tel:010-3030-1734">+010.3030.1734</Link></li>
                        <li><Link to="mailto:sseung0000@naver.com">sseung0000@naver.com</Link></li>
                    </TxtBox>
                    <LinkList>
                        <li><Link to="https://seunggry.notion.site/seunggry/Seung-Yeon-Choi-0ed5ec339a5e4d1fbdc8ff958980072c">Notion</Link></li>
                        <li><Link to="https://github.com/sseunggry">Github</Link></li>
                        <li><Link to="">Resume</Link></li>
                    </LinkList>
                </Info>
            </ContactCon>
        </Layout>
    )
}

export default Contact;