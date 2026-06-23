// document.addEventListener("click", function(e){

//     if(e.target.closest(".delete-btn")){
//         e.target.closest(".note-card").remove();
//     }

// }); retirado para adicionar animação de fechamento do card

document.addEventListener("click", function (e) {


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

});
