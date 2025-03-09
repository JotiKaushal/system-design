const users = [{name: "jot", age: 32},{name: "joti", age: 30},{name: "jyoti", age: 35},{name: "jk", age: 30}]


function sortingByAge(){
    const data = users.sort((a,b)=> a.age - b.age);
    return data;
}

console.log(sortingByAge());


module.exports =sortingByAge;