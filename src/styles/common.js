import styled from "styled-components";
import theme from "./theme";

const Title1 = styled.h2`
    font-size: ${theme.font.headLine1.size};
    color: ${theme.font.headLine1.color};
    font-weight: ${theme.font.headLine1.weight};
    text-transform: uppercase;
`;

const Title2 = styled.h3`
    font-size: ${theme.font.headLine2.size};
    color: ${theme.font.headLine2.color};
    font-weight: ${theme.font.headLine2.weight};
    text-transform: uppercase;
`;

export {Title1, Title2};