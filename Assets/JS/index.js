// Não alterar o código sem autorização do Desenvolvedor Chefe!

// Eventos de DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function () {
    const loadingModal = document.getElementById("newLoadingModal");
    const body = document.body;

    body.classList.add("no-scroll");
    document.getElementById("page").style.display = 'none';
    document.getElementById("itens").style.display = 'none';
    document.getElementById("about").style.display = 'none';
    document.getElementById("products").style.display = 'none';
    document.querySelector("footer").style.display = 'none';
    loadingModal.style.display = 'flex';

    setTimeout(() => {
        loadingModal.style.display = 'none';
        body.classList.remove("no-scroll");
        document.getElementById("page").style.display = '';
        document.getElementById("itens").style.display = '';
        document.getElementById("about").style.display = '';
        document.getElementById("products").style.display = '';
        document.querySelector("footer").style.display = '';
    }, 1500);
});

// Função para exibir um cartão específico, com base no índice passado.
function showCard(cards, index) {
    cards.forEach(card => card.classList.remove('hover'));
    if (cards.length > 0) {
        cards[index].classList.add('hover');
    }
}

// Inicia a exibição rotativa dos cartões, mostrando um cartão por vez.
function startDisplay(cards, currentIndex, displayDuration) {
    return setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(cards, currentIndex);
    }, displayDuration);
}

// Para a exibição rotativa dos cartões.
function stopDisplay(interval) {
    clearInterval(interval);
}

// Inicializa o comportamento de exibição dos cartões e adiciona eventos de mouse para cada cartão.
function initializeDisplay(containerSelector, displayDuration) {
    if (window.innerWidth < 1024) {
        return;
    }

    const cards = document.querySelectorAll(`${containerSelector} .card`);
    let currentIndex = 0;
    let displayInterval;

    // Inicia a exibição apenas se houver cartões
    if (cards.length > 0) {
        displayInterval = startDisplay(cards, currentIndex, displayDuration);
        showCard(cards, currentIndex); // Mostra o cartão inicial

        cards.forEach((card, index) => {
            // Evento de hover
            card.addEventListener('mouseenter', () => {
                stopDisplay(displayInterval);
                showCard(cards, index);
            });

            // Quando o hover termina, continua a exibição rotativa
            card.addEventListener('mouseleave', () => {
                currentIndex = index;
                displayInterval = startDisplay(cards, currentIndex, displayDuration);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDisplay('#itensContainer', 3000);
});

const aboutSection = document.getElementById('about');
const contents = aboutSection.querySelectorAll('.content');

function activateAnimations() {
    contents.forEach(content => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            content.style.opacity = '1';
            content.style.animation = 'slideInAbout 2s forwards';
        } else {
            content.style.opacity = '0';
            content.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activateAnimations);
activateAnimations();

const itemsSection = document.getElementById('itens');
const itensContainer = document.getElementById('itensContainer');
const itensContent = document.getElementById('itensContent');

function activateItemAnimations() {
    if (window.innerWidth < 1024) return;

    const contentRect = itensContent.getBoundingClientRect();
    const containerRect = itensContainer.getBoundingClientRect();

    if (contentRect.top < window.innerHeight && contentRect.bottom >= 0) {
        itensContent.style.animation = 'slideInLeft 2s forwards';
    } else {
        itensContent.style.animation = 'slideOutLeft 1s forwards';
    }

    if (containerRect.top < window.innerHeight && containerRect.bottom >= 0) {
        itensContainer.style.animation = 'slideInRight 4s forwards';
    } else {
        itensContainer.style.animation = 'slideOutRight 1s forwards';
    }
}

window.addEventListener('scroll', activateItemAnimations);
activateItemAnimations();
