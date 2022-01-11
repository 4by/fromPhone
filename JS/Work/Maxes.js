

const list = (from, r) => {
  let expl = new RegExp(r, 'g')
 
  let a = from.match(expl) 
  return a
}

const untan = (from, r, num=1) => {
  r = '(?<=('+r+')+)(?=('+r+')+)\\1'
  console.log(r)
  let expl = new RegExp(r, 'g')
  let a = from.match(expl)


  return a
}

let str = 'aaaaafAAbbbbB'

let any = '(?:.||\\s)??'
let beg = 'A'
let end = 'B'


//let reg = '(?=(?=a(?=a(?=a))))'
//console.log(list(str, reg))


let reg = 'a'
let reg2 = 'A'



console.log(untan(str, reg))

