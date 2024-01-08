import styled from "styled-components";
import theme from "./theme";

const SecKv = styled.section`
    h2{
        padding: 120px 0 60px;
        text-align: center;
        font-size: 100px;
        font-weight: 100;
    }
    img{
        display: block;
        margin: 0 auto;
        width: 1200px;
    }
`;

const Sec01 = styled.section`
    display: flex;
    padding: 120px 0;
  
    .swiper{
        padding-right: 60px;
      
        .swiper-slide{
            position: relative;
            margin-right: 30px;
            width: 720px;
            height: auto;
            
            &:last-child{
                margin-right: 0;
            }
          
            .txt{
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 0 60px 60px;
                color: ${theme.color.white};
              
                h4{
                    font-size: 32px;
                }
                p{
                    margin-top: 16px;
                    font-size: 18px;
                }
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

const Tab = styled.ul`
    margin-top: 60px;
  
    li{
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 700;
        color: ${theme.color.gray3};
        text-transform: uppercase;
      
        &:last-of-type{
            margin-bottom: 0;
        }
      
        &:hover, .active{
            color: ${theme.color.black};
        }
    }
`;

const TxtBox = styled.div`
    padding: 40px 60px 40px 240px;
    width: 40%;
    flex-shrink: 0;
`;

const Title1 = styled.h2`
    font-size: ${theme.font.headLine1.size};
    color: ${theme.font.headLine1.color};
    font-weight: ${theme.font.headLine1.weight};
`;

const Title2 = styled.h3`
    font-size: ${theme.font.headLine2.size};
    color: ${theme.font.headLine2.color};
    font-weight: ${theme.font.headLine2.weight};
    text-transform: uppercase;
`;

export {SecKv, Sec01, Title1, Title2, TxtBox, Tab};