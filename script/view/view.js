class View{
    inputVazio(mensagem){
        const input = document.getElementById("campoBusca")

        input.value = ""
        input.placeholder = "Digite uma cidade!"
        
        input.style.border = "2px solid red"
    }
    mostrarClima(data){
        const name = data.location.name
        const country = data.location.country
        const temp = data.current.temp_c
        const cidadeBox = document.querySelector(".cidade-box")

        cidadeBox.innerHTML = `
            <h2>${name}, ${country}</h2>
            <h1>${temp}°C</h1>
        `
    }
    mostrarDetalhe(data){
        const humidity = data.current.humidity
        const wind = data.current.wind_kph
        const condition = data.current.condition.text
        const chuva=data.current.precip_mm


        const detalhes = document.querySelectorAll(".det-box")

        detalhes[0].innerHTML = `
            <p>condição</p>
            <h3>${condition}</h3>
        `

        detalhes[1].innerHTML = `
            <p>umidade</p>
            <h3>${humidity} km/h</h3>
        `
        detalhes[2].innerHTML = `
            <p>Vento</p>
            <h3>${wind} km/h</h3>
        `        

        detalhes[3].innerHTML = `
            <p>Chuva</p>
            <h3>${chuva} mm</h3>
        `
    }

    mostrarPrevisaoSemana(data){
        const previsaoSemana = document.querySelectorAll(".dia-box")
        const forecast = data.forecast.forecastday

        for (let i = 0; i < 7; i++) {
            const date = forecast[i].date
            const data = new Date(date)

            const diaSemana = data.toLocaleDateString("pt-BR", {
                weekday: "short"
            })
            
            const maxTemp = forecast[i].day.maxtemp_c
            const minTemp = forecast[i].day.mintemp_c

            previsaoSemana[i].innerHTML = `
                <p>${diaSemana}</p>
                <div class="temp-box">
                    <span>${maxTemp}°</span>
                    <span>${minTemp}°</span>
                </div>
            `
            
        }

    }
}

export default new View()
