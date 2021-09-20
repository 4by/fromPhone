
let str = "aaaaaaaaaaa!";

const maxBefore = (bef, grName) => {return '(?=(?<'+grName+'>'+bef+'*))\\k<'+grName+'>'}             

//let reg = '(\\w+)*b';
//let reg = '(?=(\\w+))\\1'
let reg = maxBefore('a', 'ddf');


console.log( str.match(reg).groups );



