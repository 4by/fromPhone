
const listIn = (from, r) => {

  let expl = new RegExp(r, 'g')
  let a = from.matchAll(expl)
  return Array.from(a)
}
const wayTo = (to, grName, ...bez) => {
  let max
  if (bez.length) {
    bez = bez.map((e)=> {
      return '(?!'+e+')'
    })
    bez = ['(?:'+any,
      ...bez,
      ')'].join('')

    max = '(?=(?<'+grName+'>'+bez+'*))\\k<'+grName+'>'

    max += any + to
  } else
    max = '(?=(?<'+grName+'>'+to+'*))\\k<'+grName+'>'


  return max

}



let str = 'aaaaaAAbbbbB'

let any = '(?:.||\\s)??'
let beg = 'A'
let end = 'B'

let reg = wayTo(beg, 'gr')
let reg2 = wayTo(beg, 'gr', beg, end)


console.log(listIn(str, reg))
console.log(listIn(str, reg2))