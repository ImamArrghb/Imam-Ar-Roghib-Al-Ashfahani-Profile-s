const additionalArticles = [
    { src: "artikel7.jpg" },
    { src: "artikel8.jpg" },
    { src: "artikel9.jpg" }
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-bar input');
    const articleCards = document.querySelectorAll('.article-card');
  
    searchInput?.addEventListener('input', function () {
      const keyword = searchInput.value.toLowerCase();
  
      articleCards.forEach(card => {
        const altText = card.querySelector("img").alt.toLowerCase();
        card.style.display = altText.includes(keyword) ? "block" : "none";
      });
    });
  
    const moreButton = document.querySelector('.more-button button');
    const gridContainer = document.querySelector('.grid-container');
  
    moreButton?.addEventListener('click', () => {
      additionalArticles.forEach(article => {
        const card = document.createElement("div");
        card.className = "article-card";
        card.innerHTML = `
          <img src="${article.src}" alt="Artikel Tambahan">
          <div class="caption"></div>
        `;
        gridContainer.appendChild(card);
      });
    });
  });
  