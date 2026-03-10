// import dotenv from "dotenv"
// dotenv.config()
import view from "../view/view.js"

async function buscarClima(cidade) {
    try{
        const cidadeFormatada=encodeURIComponent(cidade)

        const response=await fetch(`https://corsproxy.io/?https://api.weatherapi.com/v1/forecast.json?key=4716245b138044a18ed164142260303&q=${cidadeFormatada}&days=7`)
        
        
        if(response.ok){
            const data= await response.json()
            console.log("essa é a data: ",data)
            view.mostrarClima(data)
            view.mostrarDetalhe(data)
            view.mostrarPrevisaoSemana(data)
            view.mostrarPrevisaoDia(data)
        }

    }catch(erro){
        console.log(erro)
    }
    
}
//buscarClima("london")
export default buscarClima
 