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
apio.get('http://127.0.0.1/api/users',{user:''},{})
.then(response=>{
/// response
},()=>{
/// error
})
```
# PUT
```javascript
apio.get('http://127.0.0.1/api/lists',{title:''},{})
.then(response=>{
/// response
},()=>{
/// error
})
```
