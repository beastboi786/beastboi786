console.log("This is a java script")
let arr2d=[[10,20,30],[40,50,60,],[70,80,90]]
console.log(arr2d[1][1])
let myobj={
    name:'user one',
    email:'userone@service.com',
    password:'23989',
    isEmployed:'true',
hobbies:['music','reading book','travelling'],
address:{
     street:'street-1',
     city:'Bathinda',
     state:'punjab',
     pincode:[123434,78906]
}
}

console.log(myobj)
console.log('hi, this is user ${myobj.name},my email is ${ ${myobj.password}') 
console.log (myobj.hobbies[0])
console.log(myobj.address.city)
console.log(myobj.address.pincode[1])