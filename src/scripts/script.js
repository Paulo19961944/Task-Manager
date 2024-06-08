document.addEventListener('DOMContentLoaded', () => {
    const seconds = document.getElementById('seconds')
    const minutes = document.getElementById('minutes')
    const hours = document.getElementById('hours')
    const encerrarBtn = document.getElementById('encerrarBtn')
    var interval

    interval = setInterval(()=>{
        var currentSeconds = parseInt(seconds.innerText)
        var currentMinutes = parseInt(minutes.innerText)
        var currentHours = parseInt(hours.innerText)

        if (currentSeconds < 59){
            currentSeconds++
        } else if (currentMinutes < 59){
            currentSeconds = 0
            currentMinutes++
        } else if (currentHours < 23){
            currentSeconds = 0
            currentMinutes = 0
            currentHours++
        } else {
            currentSeconds = 0
            currentMinutes = 0
            currentHours = 0
        }

        seconds.innerText = formatTime(currentSeconds)
        minutes.innerText = formatTime(currentMinutes)
        hours.innerText = formatTime(currentHours)
    }, 1000)

    const formatTime = (time) =>{
        return time < 10 ? `0${time}`: time
    }

    encerrarBtn.addEventListener('click', () =>{
        clearInterval(interval)
        encerrarBtn.innerText = 'Reiniciar'
        const result = document.getElementById('result')
        const resultHours = parseInt(hours.innerText)
        const resultMinutes = parseInt(minutes.innerText)
        const resultSeconds = parseInt(seconds.innerText)
        const tarefaFinalizada = document.getElementById('currentTime')
        tarefaFinalizada.innerText = 'Tarefa Finalizada'
        result.innerHTML = `<p id="result">Você demorou <span>${resultHours} Horas ${resultMinutes} Minutos e ${resultSeconds} Segundos</span> para completar a tarefa. Continue assim, pois com o tempo sua produtividade irá aumentar cada vez mais. Para voltar a tela principal, clique em Reiniciar.</p>`
    })
})
