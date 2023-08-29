var name1 = document.getElementById("name");
var email1 = document.getElementById("email");
var btn = document.getElementById("button");
var number = document.getElementById("phone");
var list = document.getElementById("list");
var container = document.getElementById("container");
  //fetching the data
axios
  .get('https://crudcrud.com/api/a5c9153548244b31a6b0cb44e73daad8/AppData')
  .then((response)=>{
    var data = response.data;
    console.log(data)
    for(var i =0; i<data.length;i++){
      var email = data[i].email;
      var name = data[i].name;
      var phonenumber = data[i].phonenumber;
      var id = data[i]._id;
      creatingList(name, email, phonenumber,id )
    }
  })
  .catch((err)=>console.error(err))

//creating the list
function creatingList(name1value, emailValue, numbervalue, id ){
  var li = document.createElement("li");
  var delbtn = document.createElement("button");
  var edit = document.createElement("button");
  delbtn.addEventListener('click',(e)=>{
    axios
    .delete('https://crudcrud.com/api/a5c9153548244b31a6b0cb44e73daad8/AppData/'+id)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    li.remove()
  })
  delbtn.innerText = "Delete";
  edit.innerText = "edit";

  li.setAttribute('id',id)
  li.setAttribute("data-email", emailValue);
  li.setAttribute("data-name", name1value);
  li.setAttribute("data-number", numbervalue);
  li.innerText = name1value + "-" + emailValue + "-" + numbervalue;

  list.appendChild(li);
  li.appendChild(delbtn);
  li.appendChild(edit);
}


btn.addEventListener("click", (e) => {
  var name = name1.value;
  var email = email1.value;
  var phone = number.value
  
  var obj = {
    name: name,
    email: email,
    phonenumber: phone,
  };
  axios
    .post(
      "https://crudcrud.com/api/a5c9153548244b31a6b0cb44e73daad8/AppData",
      obj
    )
    .then((res)=>{
      var id = res.data._id;
      creatingList(name, email, phonenumber,id )
    })
    .catch();

});




