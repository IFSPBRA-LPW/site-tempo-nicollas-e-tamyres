class View {

    inputVazio(mensagem) {
        const input = document.getElementById("campoBusca")

        input.value = ""
        input.placeholder = "Digite uma cidade!"
        input.style.border = "2px solid red"
    }

    mostrarClima(data) {
        const name = data.location.name
        const country = data.location.country
        const temp = data.current.temp_c
        const cidadeBox = document.querySelector(".cidade-box")

        cidadeBox.innerHTML = `
            <h2>${name}, ${country}</h2>
            <h1>${temp}°C</h1>
        `
    }

    mostrarDetalhe(data) {
        const humidity = data.current.humidity
        const wind = data.current.wind_kph
        const condition = data.current.condition.text
        const chuva = data.current.precip_mm

        const detalhes = document.querySelectorAll(".det-box")

        detalhes[0].innerHTML = `
            <p>Condition</p>
            <h3>${condition}</h3>
        `

        detalhes[1].innerHTML = `
            <p>Humidity</p>
            <h3>${humidity} km/h</h3>
        `

        detalhes[2].innerHTML = `
            <p>Wind</p>
            <h3>${wind} km/h</h3>
        `

        detalhes[3].innerHTML = `
            <p>Rain</p>
            <h3>${chuva} mm</h3>
        `
    }

    mostrarPrevisaoSemana(data) {

        const previsaoSemana = document.querySelectorAll(".dia-box")
        const forecast = data.forecast.forecastday

        for (let i = 0; i < 7; i++) {

            const date = forecast[i].date
            const dataDia = new Date(date)

            const diaSemana = dataDia.toLocaleDateString("en", {
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

    mostrarPrevisaoDia(data){

        const previsaoDia = document.getElementById("horasPrevisao")
        const selectDia = document.getElementById("selectDia")

        selectDia.addEventListener("change", () => {

            const diaEscolhido = selectDia.value

            previsaoDia.innerHTML = ""

            for (let i = 0; i < 7; i++) {

                const date = data.forecast.forecastday[i].date
                const dataDia = new Date(date)

                const diaSemana = dataDia
                    .toLocaleDateString("en",{weekday:"short"})
                    .toLowerCase()

                if(diaEscolhido == diaSemana){

                    const horas = data.forecast.forecastday[i].hour

                    for (let j = 0; j < 8; j++){

                        const temp = horas[j].temp_c
                        const hora = new Date(horas[j].time).getHours()

                        previsaoDia.innerHTML += `
                            <div class="temp-box">
                                <span>${hora}:00</span>
                                <span>${temp}°C</span>
                            </div>
                        `
                    }
                }
            }

        })
    }
}

export default new View()