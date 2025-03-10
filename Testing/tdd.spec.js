//pallindrome  check 121 === 121 aba === aba

const isPallindrome = require("./tdd")

test("no input -> null", ()=>{
   const result = isPallindrome("")
   expect(result).toBeNull()
})

test("null -> null", ()=>{
    const result = isPallindrome(null)
    expect(result).toBeNull()
})

test("single digit or number -> true", ()=>{
    const result = isPallindrome("a")
    expect(result).toBe(true)
})

test("aba -> true", ()=>{
    const result = isPallindrome("aba")
    expect(result).toBe(true)
})
test("abc -> false", ()=>{
    const result = isPallindrome("abc")
    expect(result).toBe(false)
})
test("121 -> true", ()=>{
    const result = isPallindrome(121)
    expect(result).toBe(true)
})
test("123 -> false", ()=>{
    const result = isPallindrome(123)
    expect(result).toBe(false)
})

test("-121 -> true", ()=>{
    const result = isPallindrome(-121)
    expect(result).toBe(true)
})

test("boolean, {}, [], ()=>{} -> false", ()=>{
    const result = isPallindrome(true)
    expect(result).toBe(false)
})

test("Aba -> true", ()=>{
    const result = isPallindrome("Aba")
    expect(result).toBe(true)
})

test("'  aba  ' -> true", ()=>{
    const result = isPallindrome("  aba  ")
    expect(result).toBe(true)
})

test("length > 10 -> null", ()=>{
    const result = isPallindrome("ahgjhghgjjhjhfhf")
    expect(result).toBeNull()
})

