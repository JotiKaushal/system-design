const sortingByAge = require("./app");

test("testing if the first user is Jot after sorting", ()=>{
    const sortedData = sortingByAge();
    expect(sortedData[0].name).toBe("joti")
})

test("testing if the sorted data length is 4", ()=>{
    const sortedData = sortingByAge();
    expect(sortedData.length).toBe(4)
})


test("testing if the sorted data is not undefined", ()=>{
    const sortedData = sortingByAge();
    expect(sortedData).not.toBe(undefined)
})