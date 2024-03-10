import {useProjectPersonalData, useProjectWorkData} from "../api";
import LoadMotion from "../components/LoadMotion";
import ProjectContent from "../components/ProjectContent";

function Project(){
    const {isPending: workLoading, data: dataWork} = useProjectWorkData();
    const {isPending: personalLoading, data: dataPersonal} = useProjectPersonalData();

    if(workLoading || personalLoading){
        return <LoadMotion />;
    }
    return (
        <ProjectContent dataWork={dataWork.data} dataPersonal={dataPersonal.data} />
    )

}

export default Project;