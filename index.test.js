const multiply= require("./index")

//test suite 


test("3 and  5 multiply eqal 10", async()=>{
    expect (multiply(3,5)).toBe(15); //exact eqality
})