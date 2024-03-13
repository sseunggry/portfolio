import {useProjectPersonalData, useProjectWorkData} from "../hook/useApiData";
import Loading from "../components/Loading";
import ProjectContent from "../components/ProjectContent";

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
        <ProjectContent dataWork={dataWork.data} dataPersonal={dataPersonal.data} />
    )

}

export default Project;