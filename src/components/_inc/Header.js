import {Link} from "react-router-dom";
import {img} from "../../recoil/atoms";
import {HeaderTag, Logo, Nav, Menu} from "../../styles/layout";

function Header({active = undefined}){
    const navList = ['About', 'Project', 'Contact'];

    return (
        <>
            <HeaderTag>
                <Logo>
                    <Link to="/">
                        <img src={`${img}/logo.svg`} alt="logo" />
                    </Link>
                </Logo>
                <Nav>
                    {navList.map((el, idx) => (
                        <Link to={`/${el}`} className={idx === active ? 'active' : ''} key={idx}>{el}</Link>
                        // <Link to={`/`} className={idx === active ? 'active' : ''} key={idx} >el</Link>
                    ))}
                    {/*<Link to="">About</Link>*/}
                    {/*<Link to="">Project</Link>*/}
                    {/*<Link to="">Contact</Link>*/}
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