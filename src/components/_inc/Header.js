import {Link} from "react-router-dom";
import {contactInfo, img, loadingTxtState, navList} from "../../recoil/atoms";
import styled from "styled-components";
import theme from "../../styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {vw} from "../../utils/common";
import {lenis} from "../../utils/smooth";
import {useRecoilState} from "recoil";

const Menu = styled.button`
    display: none;
    padding: 8px 4px;
    width: 40px;
    height: 40px;

    &:hover{
        span{
            width: 100%;
        }
    }

    span{
        width: 70%;
        height: 3px;
        //background-color: ${theme.color.black};
        transition: width 0.2s;

        &:first-of-type{
            width: 100%;
        }

    }
    ${({theme}) => theme.small`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: ${vw(16)} ${vw(10)};
        width: ${vw(80)};
        height: ${vw(80)};
    
        span{
            height: ${vw(6)};
        }
    `};
`;
const Nav = styled.nav`
    display: flex;

    a{
        margin-right: 40px;
        font-size: ${theme.font.display1.size};
        font-weight: 500;
        color: ${theme.color.gray3};
        letter-spacing: 1px;
        text-transform: uppercase;
      
        &:hover, &.active{
            color: ${theme.color.black};
        }
        
        &:last-child{
            margin-right: 0;
        }
    }
    ${({theme}) => theme.small`
        display: none;
    `};
    
`;
const Logo = styled.h1`
    a{
        display: block;
        width: 51px;
      
        img{
            width: 100%;
            vertical-align: middle;
        }

        ${({theme}) => theme.small`
            width: ${vw(100)};
        `};
    }
`;
const HeaderTag = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    mix-blend-mode: ${({color}) => color ? 'normal' : 'difference'};
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 80px;
    background-color: ${({color}) => color ? color : ''};
    z-index: 10;
    
    ${Logo}{
        mix-blend-mode: ${({color}) => color ? 'difference' : ''};
    }

    ${Nav}{
        mix-blend-mode: ${({color}) => color ? 'difference' : ''};
        a{
            //opacity: 0.3;
             color: ${theme.color.gray2};
            &:hover, &.active{
                //opacity: 1;
                color: ${theme.color.white};
            }
        }
    }

    ${Menu}{
        span{
             background-color: ${({color}) => color || theme.color.white};
        }
    }

    ${({theme}) => theme.medium`
        padding-left: 40px;
        padding-right: 40px;
    `};

    ${({theme}) => theme.small`
        position: fixed;
        top: 0;
        padding-left: ${vw(40)};
        padding-right: ${vw(40)};
        height: ${vw(120)};
        mix-blend-mode: normal;
        background-color: ${theme.color.black};
    `};
`;
const MoMenu = styled.div`
    overflow: hidden auto;
    display: none;
    position: fixed; 
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0;
    padding: 0 ${vw(40)};
    min-height: 500px;
    background: ${theme.color.black}; 
    //transform-origin: 90% 10%; transition: 0.5s; 
    z-index: 30;
    
    &.on{
        display: flex;
        flex-direction: column;
    }
    
    ${Nav} {
        display: flex;
        flex-direction: column;
        margin: ${vw(60)} 0 ${vw(80)};
        
        a{
            margin: 0 0 ${vw(60)};
            font-family: 'Playfair Display', serif;
            font-size: ${vw(90)};
            font-weight: 700;
            opacity: 0.5;
            letter-spacing: ${vw(5)};
            //-webkit-text-stroke: ${vw(2)} ${theme.color.white} ;
            
            &:last-of-type{
                margin-bottom: 0;
            }
            
            &.active, &:hover{
                opacity: 1;
                color: ${theme.color.white};
                //-webkit-text-stroke-color: transparent;
            }
        }
    }
`;

const Gnb = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    height: ${vw(120)};
`;
const InfoTxt = styled.ul`
    margin-top: auto;
    margin-bottom: ${vw(60)};
    li{
        margin-bottom: ${vw(30)};
        p{
            font-size: ${vw(24)};
            color: ${theme.color.gray3};
        }
        a{
            font-size: ${vw(40)};
            color: ${theme.color.white};
        }
    }
`;
const BtnClose = styled.button`
    ${({theme}) => theme.small`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: ${vw(16)} ${vw(10)};
        width: ${vw(80)};
        height: ${vw(80)};
    
        span{
            width: 100%;
            height: ${vw(6)};
            background-color: ${theme.color.white};
            transform: rotate(-45deg);
            transform-origin: 0 50%;
            
            &:nth-of-type(1){
                transform: rotate(45deg);
            }
        }
    `};
`;

function Header({bgColor, active, motion = false}){
    const headerRef = useRef(null);
    const moMenuRef = useRef(null);
    const [loading, setLoading] = useRecoilState(loadingTxtState);

    const onClickLogo = () => {
        setLoading(true);
    }
    const onClick = (e) => {
        const $target = e.target;
        const $targetList = $target.parentNode.childNodes;

        $targetList.forEach((el) => {if(el) return el.classList.remove('active')});
        $target.classList.add('active');

        if(moMenuRef.current) {
            moMenuRef.current.classList.remove('on');
            lenis.start();
        }
    }
    const menuOnClick = () => {
        moMenuRef.current.classList.add('on');
        lenis.stop();
    }
    const closeClick = () => {
        moMenuRef.current.classList.remove('on');
        lenis.start();
    }
    useEffect(() => {
        const header = headerRef.current;

        const logo = header.querySelector(".logo");
        const nav = header.querySelector(".nav");

        if(motion){
            gsap.set(logo, {opacity: 0});
            gsap.set(nav, {opacity: 0});

            const ani = gsap.timeline();
            ani.to(logo, {opacity: 1})
                .to(nav, { opacity: 1});

            return () => ani.revert();
        }
    }, [motion]);

    return (
        <>
            <HeaderTag ref={headerRef} color={bgColor} >
                <Logo className="logo" onClick={onClickLogo}>
                    <Link to="/" >
                        <img src={`${img}/logo_w.svg`} alt="logo" />
                    </Link>
                </Logo>
                <Nav className="nav">
                    {navList.map((el, idx) => (
                        <Link to={`/${el}`} key={idx} onClick={onClick} className={idx === active ? 'active' : ''}>
                            {el}
                        </Link>
                    ))}
                </Nav>
                <Menu type="button" onClick={menuOnClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Menu>
            </HeaderTag>
            <MoMenu ref={moMenuRef}>
                <Gnb>
                    <Logo className="logo" onClick={closeClick}>
                        <Link to="/">
                            <img src={`${img}/logo_w.svg`} alt="logo" />
                        </Link>
                    </Logo>
                    <BtnClose type="button" onClick={closeClick}>
                        <span></span>
                        <span></span>
                    </BtnClose>
                </Gnb>
                <Nav className="nav">
                    {navList.map((el, idx) => (
                        <Link to={`/${el}`} key={idx} onClick={onClick} className={idx === active ? 'active' : ''}>
                            {el}
                        </Link>
                    ))}
                </Nav>
                <InfoTxt>
                    {contactInfo && contactInfo.map(({phone, email}, idx) => (
                        <li key={idx}>
                            {phone &&
                                <>
                                    <p>연락처</p>
                                    <Link to={`tel:${phone}`}>
                                        +{phone}
                                        <span className="line"></span>
                                    </Link>
                                </>
                            }
                            {email &&
                                <>
                                    <p>이메일</p>
                                    <Link to={`mailto:${email}`}>
                                        {email}
                                        <span className="line"></span>
                                    </Link>
                                </>
                            }
                        </li>
                    ))}
                </InfoTxt>
            </MoMenu>
        </>
    )
}

export default Header;