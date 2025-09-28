$(function() {
  $('#searchBtn').on('click', function() {
    // אנימציה: תיבת החיפוש עולה כלפי מעלה
    $('#search-container').addClass('moved-up');

    // מחיקה של תוצאות קודמות
    $('#results').empty();

    // יצירת תיבות דמו עם תוכן לבדיקה
    for (let i = 1; i <= 3; i++) {
      $('#results').append(`
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">כאן תוצג כותרת. מידע -  ${i}</h5>
            <p class="card-text">בדיקה - כאן יוצג מידע מה - API.</p>
          </div>
        </div>
      `);
    }
  });
});