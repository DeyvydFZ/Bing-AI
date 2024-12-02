document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const question = document.getElementById("question").value.trim();
    const chatBox = document.getElementById("chatBox");

    if (question === "") {
        return; // Não faz nada se a pergunta estiver vazia
    }

    // Adiciona a mensagem do usuário
    const userBubble = document.createElement('div');
    userBubble.className = 'message user';
    userBubble.textContent = question;
    chatBox.appendChild(userBubble);

    // Limpa o campo de entrada
    document.getElementById("question").value = '';

    // Rola para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // URL da API com a pergunta e a chave da API
    const apiUrl = `https://jeff-apis.shop/outros/chat/gemini?query=${encodeURIComponent(question)}&apikey=guds`;

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Exibe a resposta da API
        const botBubble = document.createElement('div');
        botBubble.className = 'message bot';
        botBubble.textContent = data.resultado || "Desculpe, não consegui entender a pergunta.";
        chatBox.appendChild(botBubble);

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        // Exibe uma mensagem de erro
        const botBubble = document.createElement('div');
        botBubble.className = 'message bot';
        botBubble.textContent = "Erro: " + error.message;
        chatBox.appendChild(botBubble);

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    });
});
