let score = "210"

console.log("score "+score)
console.log(typeof score)
let scoreInNumber = Number(score)
console.log("scoren in number " + scoreInNumber)
console.log(typeof scoreInNumber)


// Number("234") = 234
// Number("123abc") = NaN
// Number("string") = NaN

// Number(true) = 1
// Number(false) = 0
// Number(null) = 0
//Number(undefined) NaN

console.log("\ntypeof 12.4" + typeof 12.4 + "\n")

console.log("Conversion to number")
console.log( "from 123 string -- " +  Number("123") + " -- and type --" + typeof(Number("123")) )
console.log( "from 123.4 string -- " +  Number("123.4") + " -- and type --" + typeof(Number("123.4")) )
console.log( "from 123abc string -- " +   Number("123abc") + " -- and type --" + typeof(Number("123abc")))
console.log(  "from abced string -- " +  Number("abcde") + " -- and type --" + typeof(Number("abcde")))
console.log(  "from empty string -- " +  Number("") + " -- and type --" + typeof(Number("")))
console.log(  "from true boolen -- " +  Number(true) + " -- and type --" + typeof(Number(true)))
console.log(  "from false boolen -- " +  Number(false) + " -- and type --" + typeof(Number(false)))

console.log(  "from  null -- " +  Number(null) + " -- and type --" + typeof(Number(null)))
console.log(  "from  Undefined -- " +  Number(undefined) + " -- and type --" + typeof(Number(undefined)))


console.log("\n String to Boolen")
console.log(  "from -ve number -- " +  Boolean(-4) + " -- and type --" + typeof(Boolean(-4)))
console.log(  "from zero numner -- " +  Boolean(0) + " -- and type --" + typeof(Boolean(0)))
console.log(  "from +ve number -- " +  Boolean(4) + " -- and type --" + typeof(Boolean(4)))

console.log(  "from -1 numner -- " +  Boolean(-1) + " -- and type --" + typeof(Boolean(-1)))
console.log(  "from +1 number -- " +  Boolean(1) + " -- and type --" + typeof(Boolean(1)))

console.log(  "from empty string -- " +  Boolean("") + " -- and type --" + typeof(Boolean("")))
console.log(  "from non empty string -- " +  Boolean("a") + " -- and type --" + typeof(Boolean("a")))
console.log(  "from null  -- " +  Boolean(null) + " -- and type --" + typeof(Boolean(null)))
console.log(  "from undefined  -- " +  Boolean(undefined) + " -- and type --" + typeof(Boolean(undefined)))


console.log("\nConversion to String")
console.log( "from 123 number -- " +  String(123) + " -- and type --" + typeof(String(123)) )
console.log( "from 123.123 number -- " +  String(123.123) + " -- and type --" + typeof(String(123.123)) )
console.log(  "from true boolen -- " +  String(true) + " -- and type --" + typeof(String(true)))
console.log(  "from false boolen -- " +  String(false) + " -- and type --" + typeof(String(false)))

console.log(  "from  null -- " +  String(null) + " -- and type --" + typeof(String(null)))
console.log(  "from  Undefined -- " +  String(undefined) + " -- and type --" + typeof(String(undefined)))

