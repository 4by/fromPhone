

const list = (from, r) => {
  let expl = new RegExp(r, 'g')
  let a = from.match(expl)


  return a

}


const maxBez = (grName, ...bez) => {




  bez = bez.map((e)=> {
    return '(?!'+e+')'
  })
  bez = ['(?:'+any,
    ...bez,
    ')'].join('')

 let max = '(?:(?=(?<'+grName+'>'+bez+'*))\\k<'+grName+'>'

  max += any +')??'
  return max

}


const maxS = (grName, to,...bez) => {

  bez = bez.map((e)=> {
    return '(?!'+e+')'
  })
  bez = ['(?:'+any,
    ...bez,
    ')'].join('')

 let max = '(?=(?<'+grName+'>'+bez+'*'+any+to+'))\\k<'+grName+'>'

  return max

}



let str = 'aaaaaAAbbbbB'

let any = '(?:.||\\s)??'
let beg = 'A'
let end = 'B'


let reg = maxS('gr', beg, beg)


console.log(list(str, reg))
