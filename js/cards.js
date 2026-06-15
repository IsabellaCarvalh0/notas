document.addEventListener("click", function(e){

    if(e.target.closest(".delete-btn")){
        e.target.closest(".note-card").remove();
    }

});
document.addEventListener("click", function(e){

    if(e.target.closest(".edit-btn")){

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

        if(novoTitulo){
            titulo.textContent = novoTitulo;
        }

        if(novaDescricao){
            descricao.textContent = novaDescricao;
        }
    }

});
const btnCriar = document.getElementById("criarNota");
console.log(btnCriar);

btnCriar.addEventListener("click", () => {

    const titulo = prompt("Título da nota:");

    if(!titulo) return;

    const descricao = prompt("Descrição da nota:");

    const novaNota = document.createElement("div");

    novaNota.classList.add("note-card");

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
        </div>
    `;

    document
        .querySelector(".notes-grid")
        .appendChild(novaNota);



    });
