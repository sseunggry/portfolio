import {useProjectPersonalData, useProjectWorkData} from "../api";
import LoadMotion from "../components/LoadMotion";
import ProjectDetailContent from "../components/ProjectDetailContent";

function ProjectDetail() {
    const {isPending: workLoading, data: dataWork} = useProjectWorkData();
    const {isPending: personalLoading, data: dataPersonal} = useProjectPersonalData();

    if(workLoading || personalLoading){
        return <LoadMotion />;
    }

    return (
        <ProjectDetailContent dataWork={dataWork.data} dataPersonal={dataPersonal.data} />
    )
}

export default ProjectDetail;