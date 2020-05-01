const r = {}

r.random = function(a,b) { 
    return a+Math.random()*(b-a); 
}

r.randomInt = function(a,b) { 
    return Math.floor(r.random(a,b)); 
}

r.sample = function(array) { 
    return array[r.randomInt(0,array.length)]; 
}

module.exports = r
