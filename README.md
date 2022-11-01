# apio
minimal api requests library

# GET
```javascript
apio.get('http://127.0.0.1/api/users')
.then(response=>{
/// response
},()=>{
/// error
})
```

# POST
```javascript
apio.post('http://127.0.0.1/api/users',{user:''},{})
.then(response=>{
/// response
},()=>{
/// error
})
```

# PUT
```javascript
apio.put('http://127.0.0.1/api/lists',{title:''},{})
.then(response=>{
/// response
},()=>{
/// error
})
```

# add default headers
```
apio.defaultHeaders = {
'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik....
}
```

# all methods
```javascript
/// all methods
apio.get(url,body,headers)
.then(response=>{
 console.log(response)
},error=>{
console.log(error)
})

apio.put(url,body,headers)
.then(response=>{
 console.log(response)
},error=>{
console.log(error)
})

apio.delete(url,body,headers)
.then(response=>{
 console.log(response)
},error=>{
console.log(error)
})

apio.post(url,body,headers)
.then(response=>{
 console.log(response)
},error=>{
console.log(error)
})

apio.option(url,body,headers)
.then(response=>{
 console.log(response)
},error=>{
console.log(error)
})
```
