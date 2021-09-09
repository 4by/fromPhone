
var wspc={
  count:9,
  funNames:[],
  state:[],
  excessProps:[],
  exodus:[]
  //должно быть не больше этого числа
} 
function trace(copObj) {

  function objDiff(pamA, pamB, ldif) {

    let objA = Object.assign({}, pamA)
    let objB = Object.assign({}, pamB)

    function arrDiff(arrA, arrB) {
      if (arrA.length == arrB.length) {
        let i;
        for (i = 0; i < (arrA.length); i++) {
          if (arrA[i] == arrB[i]) continue
          else if (Array.isArray(arrA[i]) && Array.isArray(arrB[i])) {
            let a = arrA[0]
            if (arrDiff(arrA[i], arrB[i])) continue
            else return false
          } else return false
        }
        if (i == (arrA.length)) return true
        else return false
      } 
      else return false
    }
    const writeDiff = (one, two, here) => {

      if (objDiff(one, two, {}) != undefined) {

        if (here) {
          if (ldif[here] == undefined) ldif[here] = {}
          ldif[here] = objDiff(one, two, ldif[here])
        } else {
          if (ldif == undefined) ldif = {}
          ldif = objDiff(one, two, ldif)
        }
      }
    }
    const objNotArr = (obj) => {
      if ((typeof obj == 'object') && (!Array.isArray(obj))) return true
      else return false
    }
    const change = (arg) => {
      if (arg.toVal) {
        if (!ldif[arg.toVal]) ldif[arg.toVal] = {}
        if (arg.remVal) ldif[arg.toVal].removed = arg.remVal
        if (arg.addVal) ldif[arg.toVal].added = arg.addVal
      } else if (arg.toProp) {
        if (arg.remProp) {
          if (!ldif.removedProps) ldif.removedProps = {}
          ldif.removedProps[arg.toProp] = arg.remProp
        }
        if (arg.addProp) {
          if (!ldif.addedProps) ldif.addedProps = {}
          ldif.addedProps[arg.toProp] = arg.addProp
        }
      }
    }
    const len = (obj) => Object.keys(obj).length;
   
    if (!objNotArr(objA) || !objNotArr(objB)) {
      throw new SyntaxError("Данные разных типов: введенные аргументы не сопоставимы");
    } else {
         for (let i in objA) {
          for (let j in objB) {
            if (i == j) {
           if (objA[i] != objB[i]) {
          //ничего не делаем с равными значениями
          if (objNotArr(objA[i]) && objNotArr(objB[i]))  writeDiff(objA[i], objB[i], i)
          //два обьекта немассива
          else if ((!((Array.isArray(objA[i])) && (Array.isArray(objB[i])))) || (!(arrDiff(objA[i], objB[i])))) {             
            change({
            remVal: objA[i], addVal: objB[i], toVal: i})
         }
          //два массива которые неравны и все остальное
        }
              delete objA[i]; delete objB[j];
              break
            }
          }
        }
        if (len(objA) > 0) {
          for (let i in objA) change({
            toProp: i, remProp: objA[i]})
        }
        if (len(objB) > 0) {
          for (let j in objB)  change({
            toProp: j, addProp: objB[j]})
        }
      if (len(ldif) > 0)  return ldif
    }
  }
  function fixObjs(obj) {
  for (let i in obj) {
    if (typeof obj[i] == 'object') obj[i]=Object.assign({}, obj[i])       
  }  
  }
  function changes() {
 if (!wspc.chanState) wspc.chanState=[]
 while ((wspc.chanState.length)<(wspc.state.length-1)) {
  wspc.chanState.push(objDiff(wspc.state[wspc.chanState.length], wspc.state[wspc.chanState.length+1], {}))        
 
}
 }
   function purge(obj) {
    for (let i in obj) {
  if ((wspc.excessProps.includes(i)) || (obj[i]===undefined)) delete obj[i]
}
return obj
}
  function excess(obj) {
    
    
    for (let i in obj) {
    if (obj[i]!==undefined) wspc.excessProps.push(i)
    }
  

  }
 
  function nameStack() {
  let a = new Error().stack;
 
 
 
 // let b = /(?<=at\s)(?!(nameStack|trace)).*?(?=\s)/g            
  let b = /(?<=at\s)(?!(nameStack|trace)).*/g            
 
 
let funStack = []
if ((a.match(b) || []).length != 0) {
for (let i = 0; i<a.match(b).length; i++) {
 funStack[i]= a.match(b)[i].replace(/http.*.html:/, '')
  
}
}
if (funStack.length != 0) wspc.funNames.push(funStack)  

}
 
  function exodus() {
    wspc.funNames.splice(0,1)
  for (let i=0; i<wspc.funNames.length; i++) {
    
    wspc.exodus[i+': '+wspc.funNames[i][0]] =[]; 
    if (wspc.chanState[i]) wspc.exodus[i+': '+wspc.funNames[i][0]]['changes'] = wspc.chanState[i];
    wspc.exodus[i+': '+wspc.funNames[i][0]]['funPath('+wspc.funNames[i].length+')'] = wspc.funNames[i];
     
  }
  }

  
  
  if (wspc.count !== undefined) {
   nameStack();
  if (wspc.excessProps.length==0) excess(copObj)
  let obj = (purge(copObj))
  fixObjs(obj)
  wspc.state.push(obj)
  changes()
  --(wspc.count)
  if (wspc.count == 0) {
  delete wspc['count']
  exodus();
  console.log(wspc)
  }
  }
  

  
}

