var e2c = { dog: '狗', cat: '貓', a: '一隻', the: '這隻', chase: '追', eat: '吃' }

function mt (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var cword = e2c[eword]
    c.push(cword)
  }
  return c
}

console.log('process.argv.slice(2)=', process.argv.slice(2))
var c = mt(process.argv.slice(2))
console.log(c)
