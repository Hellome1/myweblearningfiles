import { ADDTABS, CLEARTABS, DELETETABS } from "../constants";

const initState = [];
export default function(prevState=initState, action) {
  const {type, data} = action;
  switch(type) {
    case ADDTABS:
      // 增加标签
      return [
        ...prevState,
        ...[data].filter(
          itm => !prevState.map(pItm => pItm.desc).includes(itm.desc)
        )
      ];
    case DELETETABS:
      // 删除标签
      return prevState.filter(pItm => pItm.desc != data.desc);
    case CLEARTABS:
      return initState;
    default:
      return prevState;
  }
}