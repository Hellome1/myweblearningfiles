export const flatChildrenHasComponent = (arr) => {
  const nArr = [];
  deepEach(arr);
  return nArr;
  
  function deepEach(deepArr) {
    if (!deepArr.forEach) debugger;
    deepArr.forEach(itm => {
      if (itm.component) {
        const o = extendNumOrString(itm);
        nArr.push(o);
      } else if (itm.children && itm.children.length){
        deepEach(itm.children);
      }
    })
  }

  
}

// 数字或字符串才拷贝
function extendNumOrString(o) {
  var nO = {};
  for (var k in o) {
    var v = o[k];
    var typev = typeof v;
    if (typev === 'number' || typev === 'string') {
      nO[k] = v;
    }
  }
  return nO;
}