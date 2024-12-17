const {multiply, fetchData}= require("./index")


//test suite 


test("3 and  5 multiply eqal 15", async()=>{
    expect (multiply(3,5)).toBe(15); //exact eqality
})

test("3 and  5 multiply not eqal 10", async()=>{
    expect (multiply(3,5)).not.toBe(10);   //exact equality
})

test("Object Equality ", ()=>{
    const data = {alpha :"A"};
    data ["beta"]= "B";
    expect(data).toEqual({alpha:"A", beta:"B"}) //deep equality
})

test ("Null Values ", ()=>{
    const value = null ;
    expect(value).toBeNull()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()
    expect(value).not.toBeTruthy()
})

test('NuberComparison', ()=>{
    const  value = 3+3 ;
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(5);
    const floatValue= 0.2 + 0.3;
    expect(floatValue).toBeCloseTo(0.5, 5);

})

test("Array Matcher", ()=>{
    const toDoList=[
        'Running', "Coding", "Eating", "Cooking", "Sleeping"
    ]
    expect(toDoList).toContain("Eating")
})

test('the data is sucessfully resolve using promises', ()=>{
    return fetchData().then((data)=>{
        expect(data).toBe("sucessfully resolve")
    })
})

test('the data is sucessfully resolve using async await', async()=>{
  const data = await fetchData();
  expect(data).toBe("sucessfully resolve")
})

test("fetch fails", async()=>{
    expect.assertions(1);
    try {
        await fetchData(true)
        
    } catch (error) {
      expect(error).toBe("error occurred")  
    }

})

test("fetch fails with an error using rejects matcher", async () => {
    await expect(fetchData(true)).rejects.toMatch("error occurred");
  });
  
  test("fetch fails with an error using promises and .catch",async () => {
    expect.assertions(1);
    return fetchData(true).catch((error) => {
      expect(error).toMatch("error occurred");
    });
  });