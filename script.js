let cart = [{password:12335}]

let msg = document.querySelector("#msg")
let pass = 
document.querySelector("#pass")
let btn = 
document.querySelector("#btn")
btn.addEventListener("click",
    function(){
        if(pass.value==cart[0].password){
            msg.innerHTML= "right"
        }else{
            msg.innerHTML = "wrorrng"
        }
    }
)
