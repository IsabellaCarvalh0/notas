//pega todas as abas da sidebar
const abas = document.querySelectorAll(".aba");

//percorre cada aba
abas.forEach((aba) => {

    aba.addEventListener("click", () => {

        //remove a seleção de todas
        abas.forEach((item) => {
            item.classList.remove("ativa");
        });

        //deixa apenas a aba clicada selecionada
        aba.classList.add("ativa");

    });

});
//pega a sidebar
const menu = document.getElementById("menu");

//pega o botão do menu
const botaoMenu = document.getElementById("botaoMenu");

//quando clicar no botão
botaoMenu.addEventListener("click", () => {
    //abre e fecha o menu
    menu.classList.toggle("menuFechado");

});