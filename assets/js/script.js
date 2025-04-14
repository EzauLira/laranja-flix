// Seleciona os elementos relevantes
const carouselTrack = document.querySelector('.carousel-track');
const movieCards = document.querySelectorAll('.movie-card');


// Define a largura de cada cartão (incluindo margem)
const cardWidth = 220;

// Variável para controlar a posição atual do carrossel
let currentPosition = 0;

// Função para mover o carrossel automaticamente
function autoScroll() {
    const totalCards = movieCards.length; // Número total de cartões
    const visibleCards = Math.floor(window.innerWidth / cardWidth); // Número de cartões visíveis
    const maxPosition = (totalCards - visibleCards) * cardWidth;

    // Move para a esquerda
    currentPosition -= cardWidth;

    // Verifica se atingiu o limite
    if (Math.abs(currentPosition) >= maxPosition + cardWidth) {
        currentPosition = 0; // Volta ao início
    }

    // Aplica a transformação
    carouselTrack.style.transform = `translateX(${currentPosition}px)`;

    updateHighlight();
}

function updateHighlight() {
    const containerCenter = window.innerHeight / 1; // centro da tela;

    movieCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect(); //posição do card
        const cardCenter = cardRect.left - cardRect.width / 2;

        //verifica se o centro do card está no centro da tela;
        if (Math.abs(cardCenter - containerCenter) < cardRect.width / 1) {
            card.classList.add('highlight'); //adiciona destaque
        } else {
            card.classList.remove('highlight'); //remove destaque
        }
    });
}

// Inicia a rolagem automática a cada 3 segundos (3000ms)
setInterval(autoScroll, 3000);

updateHighlight();

window.addEventListener('resize', updateHighlight);

// Seleciona o botão de login
const loginButton = document.getElementById('loginButton');

// Redireciona para a página de login ao clicar no botão
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html'; // Redireciona para a página de login
});


const gratisButton = document.getElementById('gratisButton');

gratisButton.addEventListener('click', () => {
    alert('Em manutenção!');
});