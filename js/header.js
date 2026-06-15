/* ===== Pessoa 4 — Área Superior + Pesquisa ===== */
(function () {
  const input = document.getElementById("txtBusca");
  const btnBusca = document.getElementById("btnBusca");
  const content = document.querySelector(".content");

  // Seletores possíveis para os cards criados pela Pessoa 3.
  // Tentamos vários para garantir compatibilidade.
  function pegarCards() {
    return document.querySelectorAll(
      ".card, .nota, .card-nota, [data-nota]"
    );
  }

  function textoDoCard(card) {
    // tenta achar título e descrição; cai pro textContent completo
    const titulo =
      card.querySelector(".titulo, .card-titulo, h2, h3")?.textContent || "";
    const descricao =
      card.querySelector(".descricao, .card-descricao, p")?.textContent || "";
    const fallback = card.textContent || "";
    return (titulo + " " + descricao + " " + fallback).toLowerCase();
  }

  function filtrar() {
    const termo = (input?.value || "").trim().toLowerCase();
    const cards = pegarCards();
    let visiveis = 0;

    cards.forEach((card) => {
      if (!termo || textoDoCard(card).includes(termo)) {
        card.style.display = "";
        visiveis++;
      } else {
        card.style.display = "none";
      }
    });

    // Mensagem de "nenhum resultado"
    if (content) {
      let aviso = content.querySelector(".semResultados");
      if (termo && cards.length > 0 && visiveis === 0) {
        if (!aviso) {
          aviso = document.createElement("p");
          aviso.className = "semResultados";
          aviso.textContent = "Nenhuma nota encontrada.";
          content.appendChild(aviso);
        }
      } else if (aviso) {
        aviso.remove();
      }
    }
  }

  // Pesquisa em tempo real
  input?.addEventListener("input", filtrar);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      filtrar();
    }
  });

  // Clique na lupa também dispara o filtro
  btnBusca?.addEventListener("click", filtrar);

  // Observa novos cards adicionados pela Pessoa 3 e re-filtra
  if (content) {
    const obs = new MutationObserver(() => {
      if ((input?.value || "").trim()) filtrar();
    });
    obs.observe(content, { childList: true, subtree: true });
  }

  // Efeito de clique visual nos botões superiores
  document.querySelectorAll(".btnHeader").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("is-clicked");
      setTimeout(() => btn.classList.remove("is-clicked"), 180);
    });
  });
})();
