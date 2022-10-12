//Variables Area
const show = document.querySelector("#show")
const clear  = document.querySelector("#clear")
const output = document.querySelector("#output")

//Functions Area 
const showUp = function (){

    var nome = prompt(" Ola Qual e o seu nome ? ")
    if (nome === null || !isNaN (nome )){
        alert(" ⚠️ Invalid Name ")
        alert("Please Digite a Valid Name ")
        return 0
    }
    let n = parseFloat(prompt(nome + " Digite um numero para ver a Tabuada ?"))
    if(n === null || isNaN(n)){
        alert("⚠️ Invalid Number")
        alert("Please Try Again With a Valid Number")
        return 0 
    }
    let res = ""
    for (let i = 0 ; i <= 12 ;i ++){
        res += `${i} X ${n} = ${n * i} <br/>`
       
    }
    output.innerHTML = res + "<br/>" 
    output.innerHTML += nome + " Essa é a Tabuada dos " + n + "<br/>"
    output.innerHTML += nome + " This is The Multiplication Table Of " + n    
}
    const clearAll =() => {   
        output.innerHTML = ''
    }
//Events Area 
show.addEventListener("click",showUp)
clear.addEventListener("click", clearAll)
