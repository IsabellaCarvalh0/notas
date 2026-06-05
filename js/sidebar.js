//seleciona todas as abas existentes na sidebar
const abas = document.querySelectorAll(".aba");

//percorre cada aba para adicionar o evento de clique
abas.forEach((aba) => {
    aba.addEventListener("click", () => {

        //remove a classe "ativa" de todas as abas
        abas.forEach((item) => {
            item.classList.remove("ativa");
        });

        //adiciona a classe "ativa" apenas na aba clicada
        aba.classList.add("ativa");

    });
});

//seleciona a sidebar
const menu = document.getElementById("menu");

//seleciona o botão responsável por abrir e fechar o menu
const botaoMenu = document.getElementById("botaoMenu");

//executa uma ação quando o botão for clicado
botaoMenu.addEventListener("click", () => {

    //adiciona ou remove a classe "menuFechado"
    menu.classList.toggle("menuFechado");
});
