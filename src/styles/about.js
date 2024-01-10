import styled from "styled-components";
import theme from "./theme";

const AboutCon = styled.div`
    padding: 150px 0;
  
    h2{
        margin: 0 auto;
        max-width: 1440px;
    }
`;

const InfoTxt = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    padding-left: 30%;
    font-size: 60px;
    font-weight: 200;
    line-height: 1.5;
    word-break: keep-all;
  
    p{
      
    }
`;

const Intro = styled.div`
    margin-top: 140px;
    padding: 200px;
    font-size: 24px;
    font-weight: 300;
    color: ${theme.color.white};
    background-color: ${theme.color.black};
  
    .inner{
        //margin: 0 auto;
        margin-left: auto;
        max-width: 1440px;
        //width: 60%;
    }
  
    p{
        margin-bottom: 40px;
        word-break: keep-all;
        text-align: right;
        line-height: 1.6;
      
        &:last-of-type{
          margin-bottom: 0;
        }
    }
`;

export {AboutCon, InfoTxt, Intro};