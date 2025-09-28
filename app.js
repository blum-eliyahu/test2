$(function(){
  console.log('jQuery loaded');
  $('#searchForm').on('submit', function(e){
    e.preventDefault();
    const val = $('#license').val().trim();
    if(!val) { alert('הכנס מספר רישוי'); return; }
    
    $('#results').html(`
      <div class="col-12 col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">מספר רישוי: ${val}</h5>
            <p class="card-text">--בדיקת תקינות--</p>
          </div>
        </div>
      </div>`);
  });
}); 