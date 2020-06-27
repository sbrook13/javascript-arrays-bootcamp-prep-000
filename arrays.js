//first
function addElementToBeginningOfArray(a,b){
<<<<<<< HEAD
 a=[b,...a]
 var newArray = a
 return newArray
  }

//second
function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}
//third
function addElementToEndOfArray(a,b){
  a=[...a,b]
  var newAgain = a
  return newAgain
}
//4
function destructivelyAddElementToEndOfArray(a,b){
  a.push(b)
  return a
=======
  a.unshift(b)
  return a
}
//second
function destructivelyAddElementToBeginningOfArray(a,b){
  var newArray = a.unshift(b)
  return newArray
}
//third
function addElementToEndOfArray(a,b){
  a.push(b)
  return a
}
//4
function destructivelyAddElementToEndOfArray(a,b){
  var newAgain = a.push(b)
  return newAgain
>>>>>>> 3122e33183668e207ae84eb31dff442ac392296c
}
//5
function accessElementInArray(a,b){
  return(a[b])
}
//6
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(a){
  var newSlice = a.slice(1)
  return newSlice
}
<<<<<<< HEAD
var destructivelyRemoveElementFromEndOfArray = function(a){
  a.pop()
  return a
}
var removeElementFromEndOfArray = function(a){
=======
function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}
function removeElementFromEndOfArray(a){
>>>>>>> 3122e33183668e207ae84eb31dff442ac392296c
  var newBie = a.slice(0,a.length-1)
  return newBie
}

<<<<<<< HEAD
var chocolateBars = ['snickers','hundred grand','kitkat','skittles']


var cat = ["Milo","Chester","Teddy","Sebastian","Chad","Frisky"]
console.log(cat.slice(-1))

Object.keys([1,2,3])

=======
var cat = ["Milo","Chester","Teddy","Sebastian","Chad","Frisky"]
console.log(cat.slice(-1))
>>>>>>> 3122e33183668e207ae84eb31dff442ac392296c
