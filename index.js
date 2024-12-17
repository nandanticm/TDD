function multiply (a,b){
    return a*b
}


const fetchData =(shouldFail=false)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject("error occurred")
            }
            else{
                resolve("sucessfully resolve")
            }
        }, 100)
    })
}
module.exports={multiply, fetchData}