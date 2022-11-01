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
'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
}
```
```javascript
/// all methos
apio.get(url,body,headers).then(response=>{},error=>{})
apio.put(url,body,headers).then(response=>{},error=>{})
apio.delete(url,body,headers).then(response=>{},error=>{})
apio.post(url,body,headers).then(response=>{},error=>{})
apio.option(url,body,headers).then(response=>{},error=>{})
```
