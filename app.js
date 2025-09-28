$(function() {

  function searchWiki(term) {
    const url = `https://he.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&format=json&exintro=&explaintext=&titles=${encodeURIComponent(term)}&origin=*`;

    $.getJSON(url, function(data) {
      $('#results').empty();

      const pages = data.query.pages;
      for (const pageId in pages) {
        const page = pages[pageId];
        if (!page.missing) {
          const title = page.title || 'אין כותרת';
          const extract = page.extract || 'אין תוכן';
          const image = page.thumbnail ? page.thumbnail.source : 'images/background2.jpg';

          $('body').css('background-image', `url(${image})`);

          $('#results').append(`
            <div class="card mb-3" style="background-color: rgba(255,255,255,0.85);">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${extract}</p>
                <img src="${image}" class="img-fluid mt-2" alt="${title}">
              </div>
            </div>
          `);
        } else {
          $('#results').append(`<div class="alert alert-warning">לא נמצאו תוצאות עבור "${term}"</div>`);
        }
      }
    });
  }

  $('#searchBtn').on('click', function() {
    const term = $('#searchInput').val().trim();
    if(term) searchWiki(term);

    $('#search-container').removeClass('moved-up');
    setTimeout(() => {
      $('#search-container').addClass('moved-up');
    }, 10);
  });

  $('#searchInput').on('keypress', function(e){
    if(e.which === 13){
      $('#searchBtn').click();
    }
  });

});
