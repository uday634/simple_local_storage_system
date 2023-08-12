var name1 = document.getElementById('name')
var email = document.getElementById('email')
var btn = document.getElementById('button')
var number = document.getElementById('phone')
var list = document.getElementById('list');     

name1.addEventListener('keyup',(e)=>{
    var name_val = e.target.value
    console.log(name_val)
})
email.addEventListener('keyup',(e)=>{
    var email_val = e.target.value
    console.log(email_val)
})
number.addEventListener('keyup',(e)=>{
    var number_val = e.target.value
    console.log(number_val)
})

btn.addEventListener('click',(e)=>{
    let li = document.createElement('li');
    li.innerText = name1.value + '-' + email.value+'-'+number.value;
    list.appendChild(li);
    var obj = {
        name:name1.value,
        email:email.value,
        phonenumber:number.value
    }
    let newObj = JSON.stringify(obj)
    localStorage.setItem(email.value,newObj)
});