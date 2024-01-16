import {Link} from "react-router-dom";
import {headerActiveState, img, navList} from "../../recoil/atoms";
import styled, {css} from "styled-components";
import theme from "../../styles/theme";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {vw} from "../../utils/common";
import {useRecoilState} from "recoil";

const HeaderTag = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 80px;
    background-color: ${(props) => props.bgcolor || theme.color.white};
    //border-bottom: 1px solid ${theme.color.gray5};
    z-index: 1;
    
    ${(props) => (
            (props.bgcolor !== theme.color.black) && css`
            border-bottom: 1px solid ${theme.color.gray5};
        `
    )};

    Nav{
        a{
            &:hover, &.active{
                color: ${(props) => (props.bgcolor === theme.color.black) ?  theme.color.white : theme.color.black}
            }
        }
    }

    ${({theme}) => theme.medium`
        padding-left: 40px;
        padding-right: 40px;
    `};

    ${({theme}) => theme.small`
        padding-left: ${vw(40)};
        padding-right: ${vw(40)};
        height: ${vw(120)};
    `};
`;
const Logo = styled.h1`
    a{
        display: block;
        width: 51px;
        background-color: #fff;
      
        img{
            width: 100%;
            vertical-align: middle;
        }

        ${({theme}) => theme.small`
            width: ${vw(100)};
        `};
    }
`;
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
        background-color: ${theme.color.black};
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
        color: ${theme.color.gray3};
        font-weight: 500;
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

function Header({bgcolor = theme.color.white, motion = false}){
    const headerRef = useRef(null);
    const [headerActive, setHeaderActive] = useState(-1);

    const onClick = (e) =>{
        const $target = e.target;
        const $targetList = $target.parentNode.childNodes;

        $targetList.forEach((el) => el.classList.remove('active'));
        $target.classList.add('active');
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
    }, []);

    return (
        <>
            <HeaderTag ref={headerRef} bgcolor={bgcolor}>
                <Logo className="logo">
                    <Link to="/">
                        <img src={`${img}/logo.svg`} alt="logo" />
                    </Link>
                </Logo>
                <Nav className="nav">
                    {navList.map((el, idx) => (
                        <Link to={`/${el}`} key={idx} onClick={onClick}>
                            {el}
                        </Link>
                    ))}
                </Nav>
                <Menu type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </Menu>
            </HeaderTag>
        </>
    )
}

export default Header;