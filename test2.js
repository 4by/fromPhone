
const listIn = (from, r) => {

			let expl = new RegExp(r, 'g')
      let a = from.matchAll(expl)
      
      if (a) {
      a = Array.from(a)
      
      a = a.map((e)=>{return Array.from(e)})    
     
      a = a.flat()  
      
      a = a.filter((e)=>{return e})    
      
      }
      return a
		}

let str = 'AaaAaBaaB AbbAbBbbB'

let beg = 'A'

let any = '(?:.||\\s)'

let end = 'B'

let bb = any+'(?:(?<!'+beg+')(?!'+beg+'))*'+any      
let be = any+'(?:(?<!'+beg+')(?!'+end+'))*'+any      
let ee = any+'(?:(?<!'+end+')(?!'+end+'))*'+any      

let toMid = [bb,'(',beg, be, end,')',ee]

let arr = toMid.slice(2,5)

arr.splice((arr.length-1)/2,1,...toMid)

  
console.log(listIn(str, arr.join('')))








