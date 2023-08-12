var name1 = document.getElementById("name");
var email = document.getElementById("email");
var btn = document.getElementById("button");
var number = document.getElementById("phone");
var list = document.getElementById("list");

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
    delbtn.innerText = "Delete";
  
    var emailValue = email.value; 
  
    li.setAttribute("data-email", emailValue); 
    li.innerText = name1.value + "-" + emailValue + "-" + number.value;
  
    list.appendChild(li);
    li.appendChild(delbtn);
    var obj = {
      name: name1.value,
      email: emailValue,
      phonenumber: number.value,
    };
    let newObj = JSON.stringify(obj);
    localStorage.setItem(emailValue, newObj);
  
    delbtn.addEventListener("click", (e) => {
      var emailToRemove = li.getAttribute("data-email");
      list.removeChild(li);
      localStorage.removeItem(emailToRemove); 
    });
  });
  
