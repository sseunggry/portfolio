import {useEffect, useState} from "react";

export const useImgLoad = (ref, src) => {
    const [isImgLoad, setIsImgLoad] = useState(false);

    useEffect(() => {
        let $img = ref.current;
        if(!$img) return;

        if(isImgLoad){
            setIsImgLoad(false);
        }

        const updateStatus = (img) => {
            const isLoad = img.complete && img.naturalHeight !== 0;
            setIsImgLoad(isLoad);
        }

        $img.addEventListener(
            "load", () => updateStatus($img), {once: true}
        );
    }, [src]);

    return isImgLoad;
}