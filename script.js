var name1 = document.getElementById("name");
var email = document.getElementById("email");
var btn = document.getElementById("button");
var number = document.getElementById("phone");
var list = document.getElementById("list");
var container = document.getElementById('container')

name1.addEventListener("keyup", (e) => {
  var name_val = e.target.value;
});
email.addEventListener("keyup", (e) => {
  var email_val = e.target.value;
});
number.addEventListener("keyup", (e) => {
  var number_val = e.target.value;
});

btn.addEventListener("click", (e) => {
    var li = document.createElement("li");
    var delbtn = document.createElement("button");
    var edit = document.createElement("button");
    delbtn.innerText = "Delete";
    edit.innerText = 'edit';

    var emailValue = email.value; 
  
    li.setAttribute("data-email", emailValue);
    li.setAttribute('data-name',name1.value);
    li.setAttribute('data-number',number.value);
    li.innerText = name1.value + "-" + emailValue + "-" + number.value;
  
    list.appendChild(li);
    li.appendChild(delbtn);
    li.appendChild(edit)
    var obj = {
      name: name1.value,
      email: emailValue,
      phonenumber: number.value,
    };
    let newObj = JSON.stringify(obj);
    axios
      .post('https://crudcrud.com/api/fe03d5caab3548adb8278ee7c1838a3b/AppointmentData',obj)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
  
    delbtn.addEventListener("click", (e) => {
      var emailToRemove = li.getAttribute("data-email");
      list.removeChild(li);
      localStorage.removeItem(emailToRemove); 
    });
    edit.addEventListener('click',(e)=>{
        name1.value= li.getAttribute('data-name');
        email.value= li.getAttribute('data-email')
        number.value= li.getAttribute('data-number')
        var emailToRemove = li.getAttribute("data-email");
        list.removeChild(li);
        localStorage.removeItem(emailToRemove);

    })

  });
  