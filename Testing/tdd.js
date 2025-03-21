const isPallindrome = (x) =>{
if(!x) return null;
if(typeof x === 'number') x = Math.abs(x).toString();
if(typeof x !== 'string') return false;
if(x.length > 10) return null;
if(x.length === 1) return true;
x = x.trim().toLowerCase();
const reverse = x.split("").reverse().join("");
return x === reverse;
}

module.exports = isPallindrome