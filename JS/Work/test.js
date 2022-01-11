
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
let end = 'B'
let any = '(?:.||\\s)*?'
let toMid = [any,'(',beg, any, end,')',any]

let arr = toMid.slice(2,5)

arr.splice((arr.length-1)/2,1,...toMid)

  
console.log(listIn(str, arr.join('')))