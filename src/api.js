import axios from "axios";
import {useQueries, useQuery} from "@tanstack/react-query";

const BASE_PATH = "https://sseunggry.github.io/dataApi/data/portfolio/";

export function getContact(){
    return fetch(`${BASE_PATH}`).then((res) => res.json());
}

export const getData = async (dataName) => {
    const res = await axios.get(`${BASE_PATH}/${dataName}.json`);
    return res.data;
}

const dataNames = ['work', 'personal'];
export const useProjectAll = () => {
    return useQueries({
        queries: dataNames.map(dataName => (
            {queryKey: ['projectData', dataName], queryFn: () => getData(dataName)}
        )),
        combine: (results) => {
            return ({
                data: results.map(result => result.data),
                pending: results.some(result => result.isPending)
            })
        },
    })
}

export const useProjectWorkData = () => {
    return useQuery({
        queryKey: ['projectWorkData', dataNames[0]], queryFn: () => getData(dataNames[0]),
        select: (data) => {
            return ({
                data: data,
                dataFilter: data.filter(el => el.main)
            })
        }
    });
}

export const useProjectPersonalData = () => {
    return useQuery({
        queryKey: ['projectPersonalData', dataNames[1]], queryFn: () => getData(dataNames[1]),
        select: (data) => {
            return ({
                data: data,
                dataFilter: data.filter(el => el.main)
            })
        }
    });
}