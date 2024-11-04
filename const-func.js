document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const question = document.getElementById("question").value;
    const responseDiv = document.getElementById("response");

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
        responseDiv.style.display = "block";
        responseDiv.innerHTML = "Resposta: " + data.resultado;
    })
    .catch(error => {
        // Exibe uma mensagem de erro
        responseDiv.style.display = "block";
        responseDiv.innerHTML = "Erro: " + error.message;
    });
});
