import { ADDROUTES } from "../constants";

export function addRoutes(routes) {
  return { type: ADDROUTES, data: routes }
}