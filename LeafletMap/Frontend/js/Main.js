
var map;
var markerObject;
var markerCenter;



const apiUrl = 'http://localhost:19312/api/Map/GetData';
 // Çizimleri takip etmek için oluşturulan koleksiyon
// Çizim işlemini başlatmak ve durdurmak için buton

document.addEventListener('DOMContentLoaded', function () {
	init();

    document.getElementById('save-button').addEventListener('click', function() {
        const mrkr = markerCenter
        // Kullanıcı adı ve ID'yi alalım (popup içinden veya başka bir yerden)
        const id = 1;
        const lat = map.getCenter().lat;
        const lng = map.getCenter().lng;
        const datetime = new Date().toISOString();

        // saveData fonksiyonunu çağıralım
        saveData(id,lat,lng,datetime);
    }); 

    document.getElementById('download-button').addEventListener('click', async function() {
        try {
            const response = await fetch('http://localhost:5126/api/Map/GetData');
            if (response.ok) {
            // JSON verisini alındı
            const data = await response.json();
            var filename = "data.json";

            var jsonDataString = JSON.stringify(data);
            // JSON verisini içeren bir Blob oluştur
            var blob = new Blob([jsonDataString], { type: "application/json" });
            // Aşağıdaki kod, Blob nesnesini bir dosyaya dönüştürüp indirmeyi sağlar
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            } else {
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = filename;
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
               }
            } else {
                console.error('Veri alma hatası:', response.status);
                }
        } catch (error) {
                  console.error('İstek hatası:', error);
                }
    }); 

});

function init()
{
    getDataAndDisplayTable()

	// Harita oluştur
    map = L.map('map').setView([39.925533, 32.866287 ], 8);
    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Haritayı oluştururken orta noktayı alın
    var center = map.getCenter();
    
    // Orta noktaya bir simge ekleyin
    icon = L.icon({
    iconUrl: 'images/center.png',
    iconSize: [32, 32], // simge boyutu
    iconAnchor: [16, 16] // simgenin orta noktası
    });

    var iconPosition = map.latLngToContainerPoint(map.getCenter())
    .subtract(L.point(8, 8));

    markerCenter = L.marker(map.containerPointToLatLng(iconPosition), {icon: icon}).addTo(map);

    // Harita boyutu değiştiğinde simgeyi ortada tutmak için
    map.on('resize', function() {
        center = map.getCenter();
        markerCenter.setLatLng(center);
        //markerObject.update();
    });
    
    // Harita hareket ettiğinde simgeyi güncelle
    map.on('move', function() {
    center = map.getCenter();
    markerCenter.setLatLng(center);
    
    });

}




	

