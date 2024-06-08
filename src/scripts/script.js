document.addEventListener('DOMContentLoaded', () => {
    const seconds = document.getElementById('seconds'); // Captura os Segundos
    const minutes = document.getElementById('minutes'); // Captura os Minutos
    const hours = document.getElementById('hours'); // Captura as Horas
    const encerrarBtn = document.getElementById('encerrarBtn'); // Captura o Identificador do Botão
    var interval; // Inicia uma Variável Interval com Escopo Global
    var onFirstClick = true; // Inicia uma Variável onFirstClick como Verdadeira com Escopo Global

    // Inicia o Cronômetro
    interval = setInterval(() => {
        var currentSeconds = parseInt(seconds.innerText); // Adiciona os Segundos
        var currentMinutes = parseInt(minutes.innerText); // Adiciona os Minutos
        var currentHours = parseInt(hours.innerText); // Adiciona as Horas

        // Desvio Condicional
        if (currentSeconds < 59) {
            currentSeconds++; // Se for menor que 59 Segundos então Incrementar
        } else if (currentMinutes < 59) {
            currentSeconds = 0; // Zera os Segundos
            currentMinutes++; // Se for menor que 59 Minutos então Incrementar
        } else if (currentHours < 23) {
            currentSeconds = 0; // Zera os Segundos
            currentMinutes = 0; // Zera os Minutos
            currentHours++; // Se for menor que 23 Horas, então Incrementar
        } else {
            currentSeconds = 0; // Reseta os Segundos
            currentMinutes = 0; // Reseta os Minutos
            currentHours = 0; // Reseta as Horas
        }

        seconds.innerText = formatTime(currentSeconds); // Formata os Segundos
        minutes.innerText = formatTime(currentMinutes); // Formata os Minutos
        hours.innerText = formatTime(currentHours); // Formata as Horas
    }, 1000);

    // Função para Formatar as Horas
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time; // Se for menor que 10, então colocar um 0 na frente
    };

    // Adiciona Evento de Click ao Botão de Encerrar
    encerrarBtn.addEventListener('click', () => {
        if (onFirstClick) {
            clearInterval(interval); // Para o Cronômetro
            encerrarBtn.innerText = 'Reiniciar'; // Muda o Estado do Botão para Reiniciar
            const result = document.getElementById('result'); // Captura o Resultado
            const resultHours = parseInt(hours.innerText); // Insere as Horas no Resultado
            const resultMinutes = parseInt(minutes.innerText); // Insere os Minutos no Resultado
            const resultSeconds = parseInt(seconds.innerText); // Insere os Segundos no Resultado
            const tarefaFinalizada = document.getElementById('currentTime'); // Captura o Título
            tarefaFinalizada.innerText = 'Tarefa Finalizada'; // Muda o Valor para Tarefa Finalizada
            result.innerHTML = `<p id="result">Você demorou <span>${resultHours} Horas ${resultMinutes} Minutos e ${resultSeconds} Segundos</span> para completar a tarefa. Continue assim, pois com o tempo sua produtividade irá aumentar cada vez mais. Para voltar a tela principal, clique em Reiniciar.</p>`; // Insere o HTML na Tela
            onFirstClick = false; // Define a Variável onFirstClick como Falsa
        } else {
            window.location.href = 'https://paulo19961944.github.io/Task-Manager/'; // Redireciona para a Página Principal
        }
    });
});
