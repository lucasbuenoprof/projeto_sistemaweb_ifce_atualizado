// Criamos uma função (um bloco de instruções com nome)
function confirmarExclusao(event) {
    // 1. O navegador abre a janela nativa de confirmação com "OK" e "Cancelar"
    const confirmacao = confirm("Tem certeza de que deseja apagar este cadastro?");
    
    // 2. Se o usuário clicar em "Cancelar", nós cancelamos a ação de exclusão
    if (!confirmacao) {
        event.preventDefault(); // Interrompe a ação do botão
        return false;
    }
    
    // 3. Se clicar em "OK", avisa que o registro foi apagado
    alert("Registro apagado com sucesso!");
    return true;
}