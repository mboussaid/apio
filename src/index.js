const apio = {}
const methods = ["GET","PUT","DELETE","POST","OPTION"];
apio.defaultHeaders = {}
methods.forEach(method=>{
    apio[method.toLocaleLowerCase()] = function(url,body={},headers={}){
        return new Promise((resolve,reject)=>{
            if(!url){
                reject(Error('[!] Missing url'));
                return
            }
            if(!body || typeof body !== "object"){
                body = {}
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
            let payload = {
                method:method
            };
            if(method !== "GET"){
                payload = {
                    method:method,
                    headers:{
                        'Content-Type':'application/json',
                        ...headers
                    },
                    body:JSON.stringify(body)
                }
            }
            fetch(url,payload)
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