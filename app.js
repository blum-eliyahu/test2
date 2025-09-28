$(function() {

  $('#searchBtn').on('click', function() {

   
    $('#search-container').removeClass('moved-up');

    
    setTimeout(() => {
        $('#search-container').addClass('moved-up');
    }, 10);

   
    $('body').css('background-image', 'url(images/background2.jpg)');

   
    $('#results').empty();

    
    for (let i = 1; i <= 3; i++) {
      $('#results').append(`
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">כאן תוצג כותרת. מידע - ${i}</h5>
            <p class="card-text">בדיקה - כאן יוצג מידע מה - API.</p>
          </div>
        </div>
      `);
    }
  });

  $('#searchInput').on('keypress', function(e){
    if(e.which === 13){ 
        $('#searchBtn').click(); 
    }
  });

});
