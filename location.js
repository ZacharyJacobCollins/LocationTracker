if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var coords = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 15,
        center: coords,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };

     var capa = document.getElementById("capa");
     capa.innerHTML = "latitud: " + latitude + " longitud: " + "   aquesta es la precisio en metres  :  " + accuracy;  

        map = new google.maps.Map(
            document.getElementById("mapContainer"), mapOptions
            );
        var marker = new google.maps.Marker({
                position: coords,
                map: map,
                title: "ok"
        });


    },function error(msg){alert('Please enable your GPS position future.');  

  }, {maximumAge:600000, timeout:5000, enableHighAccuracy: true});

}else {
    alert("Geolocation API is not supported in your browser.");
}
