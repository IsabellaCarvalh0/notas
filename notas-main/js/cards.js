// document.addEventListener("click", function(e){

//     if(e.target.closest(".delete-btn")){
//         e.target.closest(".note-card").remove();
//     }

// }); retirado para adicionar animação de fechamento do card

document.addEventListener("click", function (e) {

    const dot = e.target.closest(".color-dot");
    if (dot) {
        const card = dot.closest(".note-card");
        const cor = dot.dataset.cor;

        card.classList.remove(
            "cor-roxo",
            "cor-azul",
            "cor-verde",
            "cor-rosa",
            "cor-amarelo"
        );

        card.classList.add(cor);

        atualizarContadores();
        return; // só sai aqui se clicou na cor
    }

    // Editar
    if (e.target.closest(".edit-btn")) {

        const card = e.target.closest(".note-card");

        const titulo = card.querySelector(".note-title");
        const descricao = card.querySelector(".note-description");

        const novoTitulo = prompt(
            "Novo título:",
            titulo.textContent
        );

        const novaDescricao = prompt(
            "Nova descrição:",
            descricao.textContent
        );

        if (novoTitulo) {
            titulo.textContent = novoTitulo;
        }

        if (novaDescricao) {
            descricao.textContent = novaDescricao;
        }
    }

    // Lixeira
    if (e.target.closest(".delete-btn")) {
        const card = e.target.closest(".note-card");
        card.classList.add("lixeira");
        mostrarNotas(filtroAtual);
        atualizarContadores();
    }

    // Favoritos
    if (e.target.closest(".favorite-btn")) {
        const card = e.target.closest(".note-card");
        card.classList.toggle("favorita");
        const estrela = card.querySelector(".favorite-btn i");

        if (card.classList.contains("favorita")) {
            estrela.classList.remove("fa-regular");
            estrela.classList.add("fa-solid");
        } else {
            estrela.classList.remove("fa-solid");
            estrela.classList.add("fa-regular");
        }

    }

});

const btnCriar = document.getElementById("criarNota");
console.log(btnCriar);

btnCriar.addEventListener("click", () => {

    const titulo = prompt("Título da nota:");

    if (!titulo) return;

    const descricao = prompt("Descrição da nota:");

    const novaNota = document.createElement("div");

    novaNota.classList.add("note-card", "novo");   // adicionado a classe "novo" para ativar a animação de abertura do card

    novaNota.innerHTML = `
    <h4 class="note-title">${titulo}</h4>

    <p class="note-description">
        ${descricao || ""}
    </p>

    <div class="card-actions">
        <button class="edit-btn">
            <i class="fa-solid fa-pen"></i>
        </button>

        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>

        <button class="favorite-btn">
            <i class="fa-regular fa-star"></i>
        </button>

        <div class="color-picker-wrapper">
            <button class="color-btn" title="Mudar cor">
                <i class="fa-solid fa-palette"></i>
            </button>

            <div class="color-dropdown">
                <span class="color-dot roxo" data-cor="cor-roxo"></span>
                <span class="color-dot azul" data-cor="cor-azul"></span>
                <span class="color-dot verde" data-cor="cor-verde"></span>
                <span class="color-dot rosa" data-cor="cor-rosa"></span>
                <span class="color-dot amarelo" data-cor="cor-amarelo"></span>
            </div>
        </div>
    </div>
`;

    document
        .querySelector(".notes-grid")
        .appendChild(novaNota);
    atualizarContadores();

});

function getEtiqueta(card) {
    if (card.classList.contains("cor-roxo")) return "trabalho";
    if (card.classList.contains("cor-azul")) return "estudos";
    if (card.classList.contains("cor-verde")) return "ideias";
    if (card.classList.contains("cor-amarelo")) return "projetos";
    if (card.classList.contains("cor-rosa")) return "pessoal";
    return null;
}

function atualizarContadores() {
    const mapa = {
        trabalho: document.querySelectorAll(".cor-roxo:not(.lixeira)").length,
        estudos: document.querySelectorAll(".cor-azul:not(.lixeira)").length,
        ideias: document.querySelectorAll(".cor-verde:not(.lixeira)").length,
        projetos: document.querySelectorAll(".cor-amarelo:not(.lixeira)").length,
        pessoal: document.querySelectorAll(".cor-rosa:not(.lixeira)").length
    };

    Object.keys(mapa).forEach(etiqueta => {
        const el = document.querySelector(
            `.contador[data-etiqueta="${etiqueta}"]`
        );

        if (el) {
            el.textContent = mapa[etiqueta];
        }
    });
}