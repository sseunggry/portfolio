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
    position: relative;
    display: flex;
    margin: 120px 0;
  
    .swiper{
        position: static;
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
        .swiper-button-prev{
          
        }
        .swiper-button-next{
        
        }
        .swiper-pagination{
            &-fraction{
                left: 12.5%;
                bottom: 10px;
                width: fit-content;
                font-size: 20px;
                color: ${theme.color.gray3};

                .swiper-pagination-current{
                    color: ${theme.color.black};
                }
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
        cursor: pointer;
      
        &:last-of-type{
            margin-bottom: 0;
        }
      
        &:hover, &.active{
            color: ${theme.color.black};
        }
    }
`;

const TxtBox = styled.div`
    padding: 40px 60px 40px 12.5%;
    width: 40%;
    flex-shrink: 0;
`;

const Sec02 = styled.section`
    display: flex;
    height: 100vh;
    
    .left{
        padding: 140px;
        flex-shrink: 0;
        width: 43%;
        background-color: ${theme.color.black};
        
        h3{
            color: ${theme.color.white};
        }
        
        dl{
            margin-top: 40px;
            color: ${theme.color.white};
          
            dt{
                margin-bottom: 8px;
                font-size: 24px;
            }
            dd{
                font-size: 18px;
            }
            
            &:last-of-type{
                opacity: 0.5;
            }
        }
    }
    .right{
        overflow: hidden auto;
        width: 100%;
        padding: 80px 90px;
      
        dl{
            display: flex;
            margin-bottom: 100px;
          
            dt{
                padding-right: 40px;
                flex-shrink: 0;
                width: 280px;
                font-size: 28px;
                text-transform: uppercase;
                font-weight: 700;
            }
            dd{
                font-size: 18px;
                
                p{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 40px;
                    
                    .period{
                        margin-bottom: 10px;
                        color: ${theme.color.gray2};
                    }
                    strong{
                        font-weight: 700;
                    }
                  
                    &:last-of-type{
                        margin-bottom: 0;
                    }
                }
            }
          
            &:last-of-type{
                margin-bottom: 0;
            }
        }
        
    }
`;

const Sec03 = styled.section`
    margin: 0 auto;
    padding-top: 120px;
    max-width: 1440px;
  
    .txt-box{
        display: flex;
        justify-content: space-between;
        padding: 130px 0;
      
        p{
            margin-right: 50px;
            flex-shrink: 0;
            width: 360px;
            font-size: 20px;
            line-height: 1.6;
        }
      
        .info{
            .txt{
                
                margin-bottom: 30px;
                font-size: 80px;
                font-weight: 500;
              
                &:last-of-type{
                    margin-bottom: 0;
                }
                
                a{
                  &:hover{
                    text-decoration: underline;
                  }
                }
            }
          
            .link{
                display: flex;
                margin-top: 50px;
                font-size: 30px;
                font-weight: 500;
              
                li{
                    margin-right: 40px;
                  
                    &:last-of-type{
                        margin-right: 0;
                    }
                }
            }
        }
    }
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

export {SecKv, Sec01, Sec02, Sec03, Title1, Title2, TxtBox, Tab};