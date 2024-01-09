import styled from "styled-components";
import theme from "./theme";

const ProjectCon = styled.div`
    margin: 0 auto;
    padding: 200px 0;
    max-width: 1440px;
`;

const Title1 = styled.h2`
    font-size: ${theme.font.headLine1.size};
    color: ${theme.font.headLine1.color};
    font-weight: ${theme.font.headLine1.weight};
    text-transform: uppercase;
`;

const Tab = styled.ul`
    display: flex;
    margin: 20px 0 50px;
    
    li{
        margin-right: 80px;
        font-size: 28px;
        font-weight: 700;
        color: ${theme.color.gray3};
        text-transform: uppercase;
      
        &:last-of-type{
            margin-right: 0;
        }
      
        &:hover, &.active{
            color: ${theme.color.black};
        }
    }
`;

const Thumb = styled.div`
    display: flex;
    
    .img-box{
        flex-shrink: 0;
        width: 720px;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .txt-box{
        padding: 60px;
        width: 100%;
        font-size: 20px;
        color: ${theme.color.black};
      
        strong{
            font-weight: 700;
        }
        h3{
            margin-top: 10px;
            font-size: 48px;
            font-weight: 300;
            word-break: keep-all;
        }
        .desc{
            margin: 20px 0 40px;
            width: 70%;
            line-height: 1.5;
            color: ${theme.color.gray2};
        }
    }
  
    &:nth-of-type(2n){
        flex-direction: row-reverse;
    }
`;

export {ProjectCon, Title1, Tab, Thumb};