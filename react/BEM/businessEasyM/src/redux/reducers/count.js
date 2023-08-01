import { ADDCOUNT } from "../constants";

const initState = 0;
export default function count (prevState=initState, action) {
  const {type , data} = action;
  switch (type) {
    case ADDCOUNT:
      return prevState + data;
    default: 
      return prevState;
  }
}