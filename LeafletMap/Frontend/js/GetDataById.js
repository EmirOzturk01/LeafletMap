
// API'den veri alıp tablo oluşturan fonksiyon

async function getDataById(id) {
    try {
        // API'ye GET isteği gönderilmesi
        const response = await fetch(`http://localhost:5126/api/Map/GetData/${id}`, {
            method: 'GET',
        });
        
        if (response.ok) {
            // JSON verisini alındı
            const data = await response.json();
            const lat = data.lat;
            const lng = data.lng;
            var myIcon = L.icon({
                iconUrl: 'images/location.png',
                iconSize: [32, 32],
                iconAnchor: [32, 32],
            });
            if (markerObject != undefined) {
                map.removeLayer(markerObject);
          };
         

            markerObject = L.marker([lat, lng], {icon: myIcon}).addTo(map);
            map.setView([lat,lng],8)
        } else {
            console.error('Veri alma hatası:', response.status);
        }
    } catch (error) {
        console.error('İstek hatası:', error);
    }
}