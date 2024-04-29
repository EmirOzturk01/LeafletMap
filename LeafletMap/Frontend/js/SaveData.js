async function saveData(id, lat, lng, datetime) {    

    var data = {
        id: id,
        lat: lat,
        lng: lng,
        datetime: datetime
    };

    try {
        const response = await fetch('http://localhost:5126/api/Map/AddData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Başarılı',
                text: 'Lokasyon Başarıyla Kaydedildi!',
            })
            console.log('Veri başarıyla gönderildi.');
            getDataAndDisplayTable();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Başarısız',
                text: `Veri gönderme hatası: ${response.status}`,
            });
            console.error('Veri gönderme hatası:', response.status);
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: `İstek Hatası: ${error}`,
        });
        console.error('İstek hatası:', error);
    }

    // saveData fonksiyonunun sonunda JSON verisini console'a yazalım
    //console.log('JSON Verisi:', JSON.stringify(data));
}
