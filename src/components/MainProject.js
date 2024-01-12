import {img, personal, work} from "../recoil/atoms";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";

const Section = styled.section`
    //overflow: hidden;
    position: relative;
    //display: flex;
    padding: 120px 240px;
    min-height: 100vh;

    h3{
        margin-bottom: 40px;
        //padding-left: 240px;
    }
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
const List = styled.ul`
    display: flex;

    li{
        position: relative;
        margin-right: 30px;
        flex-shrink: 0;
        width: 640px;
        //width: 720px;
        height: fit-content;

        &:last-child{
            margin-right: 0;
        }
    }
`;
const TxtBox = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 60px 60px;
    color: ${theme.color.white};
    
    p{
        margin-top: 16px;
        font-size: 18px;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function MainProject(){
    const data = [...Object.values(work).filter((el) => el.link), ...Object.values(personal).filter((el) => el.link)];

    return (
        <Section className="sec-01">
            <Text name="tit2">Project</Text>
            <List className="list">
                {data && Object.values(data).map(({client, name, period, thumbImg}, idx) => (
                    <li key={idx}>
                        <TxtBox>
                            <Text name="tit4" color={theme.color.white} fontWeight="400">[{client}] <br/>{name}</Text>
                            <p>{period}</p>
                        </TxtBox>
                        <Img src={`${img}/${thumbImg}`} alt="" />
                    </li>
                ))}
            </List>
        </Section>
    )
}

export default MainProject;