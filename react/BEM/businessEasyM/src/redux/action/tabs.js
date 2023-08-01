import { ADDTABS, DELETETABS, CLEARTABS } from "../constants";

export const addTabs = (data) => ({ type: ADDTABS, data });

export const deleteTabs = (data) => ({ type: DELETETABS, data });

export const clets = (data = []) => ({ type: CLEARTABS, data })