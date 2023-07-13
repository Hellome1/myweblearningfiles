import { ADDTABS, DELETETABS } from "../constants";

export const addTabs = (data) => ({type: ADDTABS, data});

export const deleteTabs = (data) => ({type: DELETETABS, data});