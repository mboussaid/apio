const apio = {}
const methods = ["GET","PUT","DELETE","POST","OPTION"];
apio.defaultHeaders = {}
methods.forEach(method=>{
    apio[method.toLocaleLowerCase()] = function(url,payload={},headers={}){
        return new Promise((resolve,reject)=>{
            if(!url){
                reject(Error('[!] Missing url'));
                return
            }
            if(!payload || typeof payload !== "object"){
                payload = {}
            }
            if(!headers || typeof headers !== "object"){
                headers = {}
            }
            if(apio.defaultHeaders && typeof apio.defaultHeaders === "object"){
                headers = {
                    ...headers,
                    ...apio.defaultHeaders
                }
            }
            fetch(url,{
                headers:{
                    'Content-Type':'application/json',
                    ...headers
                },
                body:JSON.stringify(payload)
            })
            .then(res=>{
                res.json().then(json=>{
                    resolve(json)
                },(err)=>{
                    reject(err)
                })
            },(err)=>{
                reject(err)
            })
        })
    }
})