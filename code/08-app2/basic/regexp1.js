let str = 'name: ccc, tel: 082-333333, email:ccckmit@gmail.com, url:https://misavo.com, age:51'
let regexp = /[a-z]+/g
var m
while ((m = regexp.exec(str))) {
  console.log(`Found ${m[0]}. Next starts at ${regexp.lastIndex}.`);
}
