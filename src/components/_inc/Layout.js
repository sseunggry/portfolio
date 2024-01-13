import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div`
    
`;
const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

function Layout({footer = false, children}){
    return (
        <Wrapper>
            <Header />

            <Container>
                {children}
            </Container>

            {footer && <Footer />}
        </Wrapper>
    )
}

export default Layout;