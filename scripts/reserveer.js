 //JAVASCRIPT VOOR RESERVERINGEN

 function todayDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = today.getFullYear();
    return [ dd, mm, yyyy ].join('/')
  }

//DE BUTTON VOOR RESERVEREN
 
  const reserveerKnoppen = document.querySelectorAll(".reserveerknop");
  
  reserveerKnoppen.forEach(function(button) {

    button.addEventListener('click', function (event) {
      const id = event.target.dataset.id

      
        button.style.display = 'none';
      

      
      
      document.getElementById(id).innerHTML = "je hebt gereserveerd! <br> " + todayDate();
      alert("reservering geplaatst!\n" + todayDate());
    });
  })