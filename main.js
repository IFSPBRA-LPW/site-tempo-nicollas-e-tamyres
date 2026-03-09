import buscarClima from "./script/controller/data.js"
import view from "./script/view/view.js"

const btnBusca=document.getElementById("btnBusca")
if(btnBusca){
    btnBusca.addEventListener("click",()=>{
        const cidade=document.getElementById("campoBusca").value.trim()
        console.log(`esse é o pais: ${cidade}`)
        if (cidade.length==0){
            //aqui pode ter uma função que mostre erro tem que ter uma cidade 
            view.inputVazio("A cidade não pode estar vazia.")
            return
        }
        else{
            buscarClima(cidade)
        }
        
    })
}