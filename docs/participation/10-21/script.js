// script for 10-21 participation

let form = document.getElementById("myForm");
let table= document.getElementById('data');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
})


const submit = ()=> {  
    let dog_cat = document.getElementById("dog_cat").value;
    let tea_coffee = document.getElementById("tea_coffee").value;
    let sun_snow = document.getElementById("sun_snow").value;


    let newArray = [dog_cat, tea_coffee, sun_snow];
    newArray.forEach((item) => {
        var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    table.appendChild(li);
    })
    form.reset(); 
}