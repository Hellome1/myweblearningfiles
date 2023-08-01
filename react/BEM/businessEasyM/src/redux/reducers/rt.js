import { getStationRoutes } from '@/route';
import { ADDR } from '../constants';

const initState = getStationRoutes();
export default function rt(prevState=initState, action) {
  const {type, data} = action;
  switch(type) {
    case ADDR:
      return data;
    default:
      return prevState;
  }
}