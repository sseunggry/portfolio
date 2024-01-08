import Header from "./Header";
import Footer from "./Footer";
import {Wrapper, Container} from "../../styles/layout";


function Layout({header, footer = false, children}){
    return (
        <Wrapper>
            <Header active={header.active} />

            <Container>
                {children}
            </Container>

            {footer && <Footer />}
        </Wrapper>
    )
}

export default Layout;