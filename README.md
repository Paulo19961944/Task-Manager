# TASK MANAGER
Esse é um projeto novo que estou começando. Justamente um Organizador de Tarefas. Basicamente será uma Aplicação Web Simples que irá contar quanto tempo demora para fazer uma tarefa, ou seja, só clicar em iniciar tarefa que ele irá receber a contagem. Pretendo adicionar também um contador que conta quantos cliques foram dados no botão e colocado no console, que pode ser muito util caso queira guardar essa informação em algum lugar. Ele irá demonstrar o tempo decorrido e depois irá finalizar a contagem e deixará uma mensagem no final.<br></br>

Pode ser usado para medir a sua produtividade, ou a de um funcionário de uma empresa, vendo quais são os pontos a melhorar ou não. Eu irei me divertir muito com esse projeto e espero que vocês se divirtam tanto quanto eu.<br></br>

# PROTÓTIPO
[PROTÓTIPO NO MOBILE](https://www.figma.com/design/VUI70uQsG7fddmGsjiTv0k/SISTEMA-DE-CONTAGEM-DE-TEMPO-DE-TAREFAS?node-id=1-2&t=hl9uBY0TtI1MLCDB-1)<br></br>
[PROTÓTIPO NO DESKTOP](https://www.figma.com/design/VUI70uQsG7fddmGsjiTv0k/SISTEMA-DE-CONTAGEM-DE-TEMPO-DE-TAREFAS?node-id=1-47&t=hl9uBY0TtI1MLCDB-1)<br></br>

# HTML
Foi utilizado o conceito de Semântica no HTML, o que facilita a busca pelos mecanismos de pesquisas e auxilia na Acessibilidade. Foi colocado em Header, Main, Section e Footer, o que faz sentido em questão de semântica. Ainda usei um Article no timer. Ainda não conheço algo que seja usado em questão de semântica para usar um cronômetro em si, mas utilizei inclusive a tag button, então está tranquilo em relação a semântica.

# CSS
Foi adicionado o conceito de Mobile First. A Maioria das telas de hoje são os Celulares, algo em torno de 90%. Então é muito importante aplicar esse conceito. Também foi usado Flexbox para posicionar os elementos, além da propriedade position também. Foi adaptado depois para as telas maiores com os breakpoints de 576px, 768px, 1024px, 1920px, 2560px então está adaptável a vários tipos de telas que temos disponíveis no mercado.<br></br>

# JAVASCRIPT
No JavaScript foi utilizado o DOMContentLoaded para já funcionar automaticamente, assim que ele muda para a outra página ele já inicializa. Não foi usado para mudar para a página pelo JavaScript para deixar o código em JavaScript mais leve e delegar a responsabilidade de Links para o HTML. Então, assim que ele é redirecionado a página funciona. Então começa a armazenar as variáveis, captura os Elementos HTML, uma Variável para o Interval e uma para ver se é o primeiro clique. Usei const sempre que pude, usei algumas var pois ela é de escopo global, então posso utilizar ela dentro do código sem precisar declarar dentro de uma função. Depois disso é capturado os Segundos, Minutos e Horas e convertido em números inteiros, para não ficar inserindo um monte de texto. E faz a lógica do cronômetro. Se for menor que 59 segundos, ele incrementa os segundos. Se for menor que 59 minutos ele incrementa os minutos. Se for menor que 23 horas ele incrementa as Horas. E é feito quando é menor que 59, pelo fato que se colocasse um segundo a mais, ele ia incrementar de novo quando chegasse em 60 e afetaria a lógica do programa, porque o zero também conta, então é de 0 a 59, que percorre 60 números. Depois disso tem uma lógica para formatar o tempo, usei operador ternário para o código ficar mais leve. Se for menor que 10, ele adiciona um zero na frente. Não faz sentido ser menor ou igual a 10 porque já tem dois dígitos, e dá erro no programa.<br></br> 

Se a pessoa clicar em encerrar, então ela para o cronômetro, modifica o estado do botão para Reiniciar, captura o resultado, crio variáveis dentro dele para ficar organizado e evitar conflitos, muda o título para Tarefa Finalizada e Mostra o Resultado, lembrando que é necessário colocar o isFirstClick como false, pois se ele clicar de novo, redireciona para a página principal. <br></br>

# LINK DO PROJETO
[Clique Aqui e Acesse o Projeto!!!](https://paulo19961944.github.io/Task-Manager/)
