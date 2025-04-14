// Seleciona o botão de login
const cadastroButton = document.getElementById('cadastro');

// Redireciona para a página de cadastro ao clicar no botão
cadastroButton.addEventListener('click', () => {
    window.location.href = 'cadastro.html'; // Redireciona para a página de login
});

// Seleciona o formulário de login
const loginForm = document.getElementById('loginForm');

// Adiciona um evento de envio ao formulário
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do e-mail e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Simula uma validação simples (substitua por autenticação real)
    if (email === 'usuario@gmail.com' && senha === 'senha123') {
        alert('Login bem-sucedido!');
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});