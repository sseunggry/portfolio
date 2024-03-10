import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {lenis} from "./smooth";

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        lenis.scrollTo(0, {
            immediate: true
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;