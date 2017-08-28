function theBeatlesPlay (musician, instruments){
  var arr = []
  for (let i = 0; i<musician.length; i++){
    arr.push(`${musician[i]} plays ${instruments[i]}`);
  }
  return arr
}
function johnLennonFacts (facts){
  let arr = []
  for (let i = 0; i<facts.length; i++){
    arr.push(`${facts[i]}!!!`)
  }
  return arr
}
function iLoveTheBeatles (n) {
  let str = "I love the Beatles!"
  let arr = []
  if (n<15){
  for (let i = 0; i<=n;i++){
    arr.push(str)
  }
}
  else {
    arr = "I love the Beatles!"
  }
  return arr
}
