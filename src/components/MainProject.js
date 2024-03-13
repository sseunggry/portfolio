import {useProjectPersonalData, useProjectWorkData} from "../hook/useApiData";
import Loading from "./Loading";
import MainProjectContent from "./MainProjectContent";

function MainProject(){
    const {isPending: workLoading, data: dataWork, isError: workError } = useProjectWorkData();
    const {isPending: personalLoading, data: dataPersonal, isError: personalError } = useProjectPersonalData();

    if(workLoading || personalLoading){
        return <Loading />;
    }
    if(workError || personalError) {
        return;
    }
    return (
        <MainProjectContent dataWork={dataWork.dataFilter} dataPersonal={dataPersonal.dataFilter}/>
    )
}

export default MainProject;