// Seleciona todas as abas existentes na sidebar
const abas = document.querySelectorAll(".aba");

// Percorre cada aba para adicionar o evento de clique
abas.forEach((aba) => {
    aba.addEventListener("click", () => {
        // Remove a classe "ativa" de todas as abas
        abas.forEach((item) => {
            item.classList.remove("ativa");
        });

        // Adiciona a classe "ativa" apenas na aba clicada
        aba.classList.add("ativa");
    });
});

const container = document.querySelector(".container");
const menu = document.getElementById("menu");
const botaoMenu = document.getElementById("botaoMenu");
const iconeMenu = botaoMenu.querySelector("i");
const mediaMobile = window.matchMedia("(max-width: 768px)");

function definirEstadoMenu(aberto) {
    menu.classList.toggle("menuFechado", !aberto);
    container.classList.toggle("menuFechado", !aberto);
    botaoMenu.setAttribute("aria-expanded", String(aberto));

    iconeMenu.classList.toggle("fa-bars", !aberto);
    iconeMenu.classList.toggle("fa-xmark", aberto);
}

function aplicarEstadoInicial() {
    // Desktop começa aberto. Mobile começa fechado para não cobrir o conteúdo.
    definirEstadoMenu(!mediaMobile.matches);
}

botaoMenu.addEventListener("click", () => {
    definirEstadoMenu(menu.classList.contains("menuFechado"));
});

document.addEventListener("click", (event) => {
    const clicouNoMenu = menu.contains(event.target);
    const clicouNoBotao = botaoMenu.contains(event.target);

    if (!mediaMobile.matches || menu.classList.contains("menuFechado") || clicouNoMenu || clicouNoBotao) {
        return;
    }

    definirEstadoMenu(false);
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        definirEstadoMenu(false);
    }
});

if (typeof mediaMobile.addEventListener === "function") {
    mediaMobile.addEventListener("change", aplicarEstadoInicial);
} else {
    mediaMobile.addListener(aplicarEstadoInicial);
}

aplicarEstadoInicial();