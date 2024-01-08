import {Link} from "react-router-dom";
import {img} from "../../recoil/atoms";
import {HeaderTag, Logo, Nav, Menu} from "../../styles/header";


function Header(){
    return (
        <>
            <HeaderTag>
                <Logo>
                    <Link to="/">
                        <img src={`${img}/logo.svg`} alt="logo" />
                    </Link>
                </Logo>
                <Nav>
                    <Link to="">About</Link>
                    <Link to="">Project</Link>
                    <Link to="">Contact</Link>
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