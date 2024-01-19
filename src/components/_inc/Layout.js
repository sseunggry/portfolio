import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Header_ from "./Header_";
import theme from "../../styles/theme";

const Wrapper = styled.div`
    background-color: ${(props) => props.color ? props.color : theme.color.white};
`;
const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

function Layout({header = {active: -1, color: ''}, footer = false, color = '', children}){
    return (
        <Wrapper color={color}>
            <Header
                active={header.active}
                color={header.color}
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