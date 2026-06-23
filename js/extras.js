document.addEventListener("click", function(e){
    const botao = e.target.closest(".favorite-btn");
    if(!botao) return;

    botao.classList.toggle("active");
    const icone = botao.querySelector("i");

    if(botao.classList.contains("active")){
        icone.classList.remove("fa-regular");
        icone.classList.add("fa-solid");
    }else{
        icone.classList.remove("fa-solid");
        icone.classList.add("fa-regular");
    }
});

document.addEventListener("click", function(e){
    const botao = e.target.closest(".delete-btn");
    if(!botao) return;

    const card = botao.closest(".note-card");
    card.classList.add("removendo");

    setTimeout(() => {
        card.remove();
    }, 800);
});

document.addEventListener("click", function(e){

    const botaoCor = e.target.closest(".color-btn");
    if(botaoCor){
        const dropdown = botaoCor.nextElementSibling;

        document.querySelectorAll(".color-dropdown.aberto").forEach(d => {
            if(d !== dropdown) d.classList.remove("aberto");
        });

        dropdown.classList.toggle("aberto");
        return;
    }

    const bolinha = e.target.closest(".color-dot");
    if(bolinha){
        const card = bolinha.closest(".note-card");
        const cor = bolinha.dataset.cor;

        card.classList.remove("cor-roxo", "cor-azul", "cor-verde", "cor-rosa", "cor-amarelo");
        card.classList.add(cor);

        card.querySelectorAll(".color-dot").forEach(d => d.classList.remove("selecionada"));
        bolinha.classList.add("selecionada");

        bolinha.closest(".color-dropdown").classList.remove("aberto"); // fecha depois de escolher
        return;
    }

    document.querySelectorAll(".color-dropdown.aberto").forEach(d => d.classList.remove("aberto"));

});