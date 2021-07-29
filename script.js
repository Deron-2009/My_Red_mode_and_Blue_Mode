const body=document.querySelector("body")
const mode=document.querySelector("#mode")
let light=true //We use 'let' here because 'const' is not changeable
mode.addEventListener("click",
function(){
    if(light){
        body.style.backgroundColor="red"
        mode.value="Blue Mode"
        mode.style.backgroundColor="blue"
        light=false
    }
    else{
        body.style.backgroundColor="blue"
        mode.value="Red Mode"
        mode.style.backgroundColor="red"
        light=true
    }
})
