import styled from "styled-components";
import {img} from "../recoil/atoms";
import theme from "./theme";

const HeaderTag = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    
    border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
    a{
        display: block;
        width: 51px;
        height: 40px;
      
        img{
            width: 100%;
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    
    a{
        margin-right: 80px;
        font-size: ${theme.font.display1.size};
        color: ${theme.color.gray3};
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
      
        &:hover{
            color: ${theme.color.black};
        }
        
        &:last-child{
            margin-right: 0;
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

export {HeaderTag, Logo, Nav, Menu};