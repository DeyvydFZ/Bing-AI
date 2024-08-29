document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const question = document.getElementById("question").value;
    const responseDiv = document.getElementById("response");

    // Exemplo de URL da API
    const apiUrl = "https://api.example.com/ask"; // Substitua pela URL da sua API

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        // Exibe a resposta da API
        responseDiv.style.display = "block";
        responseDiv.innerHTML = "Resposta: " + data.answer;
    })
    .catch(error => {
        // Exibe uma mensagem de erro
        responseDiv.style.display = "block";
        responseDiv.innerHTML = "Erro: " + error.message;
    });
});