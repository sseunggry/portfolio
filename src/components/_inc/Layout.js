import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Header_ from "./Header_";
import theme from "../../styles/theme";

const Wrapper = styled.div`
    
`;
const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

function Layout({header = {active: -1, bg: theme.color.white}, footer = false, children}){
    return (
        <Wrapper>
            <Header
                active={header.active}
                bg={header.bg}
                motion={header.motion}
            />

            <Container>
                {children}
            </Container>

            {footer && <Footer />}
        </Wrapper>
    )
}

export default Layout;