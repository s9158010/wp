var random = function(a,b) { 
    return a+Math.random()*(b-a); 
}

var randomInt = function(a,b) { 
    return Math.floor(random(a,b)); 
}

var sample = function(array) { 
    return array[randomInt(0,array.length)]; 
}

console.log("random(10,20)=", random(10,20));
console.log("randomInt(10,20)=", randomInt(10,20));
console.log("sample([a,b,c,d,e])=", sample(['a','b','c','d','e']));