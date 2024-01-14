import {Link} from "react-router-dom";
import {img, navList} from "../../recoil/atoms";
import styled from "styled-components";
import theme from "../../styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const HeaderTag = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    
    z-index: 1;
    //border-bottom: 1px solid #ddd;
`;
const Logo = styled.h1`
    a{
        display: block;
        width: 51px;
        height: 40px;
        background-color: #fff;
      
        img{
            width: 100%;
        }
    }
`;
const Menu = styled.button`
    padding: 8px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
            color: ${theme.color.white};
        }
        
        &:last-child{
            margin-right: 0;
        }
    }
`;

function Header(){
    const headerRef = useRef(null);

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

        gsap.set(logo, {opacity: 0});
        gsap.set(nav, {opacity: 0});

        const ani = gsap.timeline();
        ani.to(logo, {opacity: 1})
            .to(nav, { opacity: 1});

        return () => ani.revert();

    }, []);

    return (
        <>
            <HeaderTag ref={headerRef}>
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
                {/*<Menu type="button">*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*</Menu>*/}
            </HeaderTag>
        </>
    )
}

export default Header;