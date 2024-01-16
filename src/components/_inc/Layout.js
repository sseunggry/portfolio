import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Header_ from "./Header_";

const Wrapper = styled.div`
    
`;
const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

function Layout({header = {}, footer = false, children}){
    return (
        <Wrapper>
            <Header
                bgcolor={header.bgcolor}
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