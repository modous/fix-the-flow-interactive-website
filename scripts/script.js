
var map = L.map('map').setView([52.3759250759437, 4.908394762488651], 13);



L.tileLayer('https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	maxZoom: 19,
	subdomains: 'abcd',
	accessToken: 'kNtCCULNTD1RmU171cnWoSYtfhGSRTgHzr9gvYwo7hATlg66ihnKpP0PtdAscvtM',
}).addTo(map);


document.querySelectorAll("button").forEach((element) => {
    let lat = element.dataset.lat;
    let long = element.dataset.long;
    let variable = element.dataset.var;
    let aantal = element.dataset.getal;

    L.marker([lat, long]).addTo(map);
   

    element.addEventListener("click", function () {
        map.flyTo([lat, long], 14, {
          duration: 2,
        });
        var tooltip = L.tooltip()
        .setLatLng([lat, long])
        .setContent(variable)
        .addTo(map);
      });
    });


    //JAVASCRIPT VOOR RESERVERINGEN

    function todayDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
      var yyyy = today.getFullYear();
      return [ dd, mm, yyyy ].join('/')
    }



    function showAlert(id) {

      
       document.getElementById(id).innerHTML = "je hebt gereserveerd!<br> " + todayDate();
      alert("reservering geplaatst!\n" + todayDate());
    
    
    
    
    } 















    
  // function initMap() {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 52.3759250759437, lng: 4.908394762488651},
  //     zoom: 13
  //   });
    
  

  //   const Oosterdokskade = { lat: 52.3759250759437, lng: 4.908394762488651 };
  //   const Spaarndammerstraat = { lat: 52.3889343533289, lng: 4.880050638536307 };
  //   const Javaplein = { lat: 52.36429770883803, lng: 4.938856711551853 };
  //   const ccAmstel = { lat: 52.353327900638206, lng: 4.906540513404021 };
    
  //   const contentString =
  //     '<div id="content">' +
  //     '<div id="siteNotice">' +
  //     "</div>" +
  //     '<h1 id="firstHeading" class="firstHeading">OBA oosterdokskade </h1>' +
  //     '<div id="bodyContent">' +

  //     "Oosterdokskade 21 1035EG Amsterdam <br><b>telefoon:</b> 020 523 0900<br>" +
  //     "<b>Openingstijden:</b> 8:00 - 20:00 <br>" +
  //     "<b>Aantal studieplekken beschikbaar:</b> 20 <br> <b>bereikbaar voor mindervaliden:</b> ja <br> " +
  //     "<b> Eerstvolgende activiteit:</b> <br> Oefenuur 6 oktober 2022, van 09:30 tot 17:30 <br>" +
  //     "<b>Studieplekken:</b> <br>Er zijn op deze vestiging 33 studieplekken, waarvan 8 met een computer en geen stilteplekken. <br>" +
  //     "<b>faciliteiten:</b><br> wifi: publicroam<br> stroom: ja<br> printen/kopiëren: account/voucher<br> toiletten: ja<br>" +
  //     "minder validetoiletten: ja<br>horeca/automaat: nee<br>eten toegestaan: op bepaalde plekken<br>" +
  //     "drinken toegestaan: ja<br>zaalverhuur: ja<br>plek reserveren: nee<br>servicebalie / host(ess): ja" +
  //     "</div>" +
  //     "</div>";

  //     const contentString1 =
  //     '<div id="content">' +
  //     '<div id="siteNotice">' +
  //     "</div>" +
  //     '<h1 id="firstHeading" class="firstHeading">OBA Spaarndammerstraat</h1>' +
  //     '<div id="bodyContent">' +

      // "Spaarndammerstraat 21 1035EG Amsterdam <br><b>telefoon:</b> 020 523 0900<br>" +
      // "<b>Openingstijden:</b> 8:00 - 20:00 <br>" +
      // "<b>Aantal studieplekken beschikbaar:</b> 20 <br> <b>bereikbaar voor mindervaliden:</b> ja <br> " +
      // "<b> Eerstvolgende activiteit:</b> <br> Oefenuur 6 oktober 2022, van 09:30 tot 17:30 <br>" +
      // "<b>Studieplekken:</b> <br>Er zijn op deze vestiging 33 studieplekken, waarvan 8 met een computer en geen stilteplekken. <br>" +
      // "<b>faciliteiten:</b><br> wifi: publicroam<br> stroom: ja<br> printen/kopiëren: account/voucher<br> toiletten: ja<br>" +
      // "minder validetoiletten: ja<br>horeca/automaat: nee<br>eten toegestaan: op bepaalde plekken<br>" +
      // "drinken toegestaan: ja<br>zaalverhuur: ja<br>plek reserveren: nee<br>servicebalie / host(ess): ja" +
  //     "</div>" +
  //     "</div>";


  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString, 
  //   });

  //     const infowindow1 = new google.maps.InfoWindow({
  //       content: contentString1,
  //   });

  //   const marker = new google.maps.Marker({
  //     position: Oosterdokskade,
  //     map,
  //     title: "OBA Oosterdokskade",
  //   });

  //   const marker1 = new google.maps.Marker({
  //     position: Spaarndammerstraat,
  //     map,
  //     title: "OBA Spaarndammerstraat",
  //   });

  //   const marker2 = new google.maps.Marker({
  //     position: Javaplein,
  //     map,
  //     title: "OBA Javaplein",
  //   });

  //   const marker3 = new google.maps.Marker({
  //     position: ccAmstel,
  //     map,
  //     title: "OBA cc amstel",
  //   });

    
  
  //   marker.addListener("click", () => {
  //     infowindow.open({
  //       anchor: marker,
  //       map,
  //       shouldFocus: false,
  //     });
  //   });

  //   marker1.addListener("click", () => {
  //     infowindow1.open({
  //       anchor: marker1,
  //       map,
  //       shouldFocus: false,
  //     });
  //   });

  //   marker2.addListener("click", () => {
  //     infowindow.open({
  //       anchor: marker2,
  //       map,
  //       shouldFocus: false,
  //     });
  //   });

  //   marker3.addListener("click", () => {
  //     infowindow.open({
  //       anchor: marker3,
  //       map,
  //       shouldFocus: false,
  //     });
  //   });

  // }
  
  // window.initMap = initMap;