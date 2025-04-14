// Seleciona o formulário de login
const cadastroForm = document.getElementById('cadastroForm');

// Adiciona um evento de envio ao formulário
cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do e-mail e senha
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    const cpf = document.getElementById('cpf').value;

    // Simula uma validação simples (substitua por autenticação real)
    if (usuario === 'usuario' && email === 'usuario@gmail.com' && senha === 'senha123' && confirmaSenha === 'senha123' && cpf === '12345678910') {
        alert('Cadastro concluido com sucesso!');
    } else {
        alert('Usuario ou e-mail já existe.');
    }
});