// Liste des jeux, leurs tags, et leurs boîtes modales
const games = [
  {
    tag: "IvoireRun",
    modal: new bootstrap.Modal(document.querySelector(".IvoireRun")),
  },
  {
    tag: "GnamaGnama",
    modal: new bootstrap.Modal(document.querySelector(".GnamaGnama")),
  },
  {
    tag: "ReferenceIvoirienne",
    modal: new bootstrap.Modal(document.querySelector(".ReferenceIvoirienne")),
  },
  {
    tag: "Ziguehi",
    modal: new bootstrap.Modal(document.querySelector(".Ziguehi")),
  },
];

// Quand on est sur la page des jeux
$(window).bind("hashchange", function () {
  games.forEach((game) => {
    if (window.location.hash === `#${game.tag}`) {
      setTimeout(() => {
        game.modal.show();
      }, 500);

      // Pour réinitialiser le hastag de la page
      history.replaceState(
        {},
        document.title,
        window.location.href.split("#")[0]
      );
    }
  });
});

// Quand on vient depuis la page d'accueil
$(window).bind("DOMContentLoaded", function () {
  games.forEach((game) => {
    if (window.location.hash === `#${game.tag}`) {
      setTimeout(() => {
        game.modal.show();
      }, 2500);

      // Pour réinitialiser le hashtag de la page
      history.replaceState(
        {},
        document.title,
        window.location.href.split("#")[0]
      );
    }
  });
});
