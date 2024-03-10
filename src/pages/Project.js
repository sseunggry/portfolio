import {useProjectPersonalData, useProjectWorkData} from "../api";
import Loading from "../components/Loading";
import ProjectContent from "../components/ProjectContent";
import ProjectDetailContent from "../components/ProjectDetailContent";

function Project(){
    const {isPending: workLoading, data: dataWork, isError: workError } = useProjectWorkData();
    const {isPending: personalLoading, data: dataPersonal, isError: personalError } = useProjectPersonalData();

    if(workLoading || personalLoading){
        return <Loading />;
    }
    if(workError || personalError) {
        return;
    }
    return (
        <ProjectDetailContent dataWork={dataWork.data} dataPersonal={dataPersonal.data} />
    )

}

export default Project;