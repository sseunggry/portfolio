import {useProjectPersonalData, useProjectWorkData} from "../api";
import LoadMotion from "./LoadMotion";
import MainProjectContent from "./MainProjectContent";

function MainProject(){
    const {isPending: workLoading, data: dataWork } = useProjectWorkData();
    const {isPending: personalLoading, data: dataPersonal} = useProjectPersonalData();

    if(workLoading || personalLoading){
        return <LoadMotion />;
    }
    return (
        <MainProjectContent dataWork={dataWork.dataFilter} dataPersonal={dataPersonal.dataFilter}/>
    )
}

export default MainProject;