import {useEffect, useState} from "react";

// const useWindowSizeCustom = () => {
//     const [windowSize, setWindowSize] = useState({
//         width: undefined,
//         height: undefined
//     });
//
//     useEffect(() => {
//         if(typeof window !== 'undefined') {
//
//             const handleResize = () => {
//                 setWindowSize({
//                     width: window.innerWidth,
//                     height: window.innerHeight
//                 });
//             }
//
//             window.addEventListener('resize', handleResize);
//             handleResize();
//
//             return () => window.removeEventListener('resize', handleResize);
//
//         } else{
//             return () => window.removeEventListener('resize', () => {
//                 return null
//             });
//         }
//     }, []);
//
//     return windowSize;
// }

const useWindowSizeCustom = (target) => {
    const [resize, setResize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if(typeof target !== 'undefined') {
            let $targetWidth = (target === 'window') ? window.innerWidth : document.querySelector(target).offsetWidth;
            let $targetHeight = (target === 'window') ? window.innerHeight : document.querySelector(target).offsetHeight;

            const handleResize = () => {
                setResize({
                    width: $targetWidth,
                    height: $targetHeight
                });
            }

            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);

        } else{
            return () => window.removeEventListener('resize', () => {
                return null
            });
        }
    }, []);

    return resize;
}

// export default resizeComponent;

export default useWindowSizeCustom;