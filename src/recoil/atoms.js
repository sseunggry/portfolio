import project from "../data/project_list.json";
import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

//variable
export const img = `${process.env.PUBLIC_URL}/images`;

export const contactInfo = project.contact;
export const infoLink = project.infoLink;
export const navList = ['About', 'Project', 'Contact'];

//atom
const {persistAtom:projectTabAtom} = recoilPersist({
    key: "projectTab",
    storage: sessionStorage
});

export const projectTabState = atom({
    key: "projectTabState",
    default: "work",
    effects_UNSTABLE: [projectTabAtom]
});

export const loadingTxtState = atom({
   key: "loadingState",
   default: true
});

export const mainDataLoadState = atom({
   key: "mainDataLoadState",
   default: false
});

