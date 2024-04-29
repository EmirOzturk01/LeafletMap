
// API'den veri alıp tablo oluşturan fonksiyon

async function getDataAndDisplayTable() {
    try {
        // API'ye GET isteği gönderilmesi
        const response = await fetch('http://localhost:5126/api/Map/GetData');
        
        if (response.ok) {
            // JSON verisini alındı
            const data = await response.json();

            const dataTable = document.getElementById('markerTable');

            dataTable.innerHTML = '';

            // Başlık satırının oluşturulması
            const headerRow = document.createElement('tr');
            const headers = ['Id', 'Latitude', 'Longitude', 'Actions'];

            
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });
            dataTable.appendChild(headerRow);

            // Veriler tabloya eklenmesi
            data.forEach(entry => {
                const row = document.createElement('tr');

                // id, latitude ve longitude sütunları
                const markerIdCell = document.createElement('td');
                markerIdCell.textContent = entry.id;
                row.appendChild(markerIdCell);

                const markerLatitudeCell = document.createElement('td');
                markerLatitudeCell.textContent = entry.lat;
                row.appendChild(markerLatitudeCell);

                const markerLongitudeCell = document.createElement('td');
                markerLongitudeCell.textContent = entry.lng;
                row.appendChild(markerLongitudeCell);

                const deleteButtonCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.style.width = '90px';
                deleteButton.style.marginRight = '5px';
                deleteButton.textContent = 'Sil';
                deleteButton.id = 'delete-button'
                deleteButton.addEventListener('click', function() {
                    // Satırın ID'sini al ve işlem yap
                    const rowId = parseInt(this.parentNode.parentNode.firstElementChild.textContent);
                    var response = deleteData(rowId)
                    .then(response => {
                      if(response == "OK")
                      {
                        if (markerObject != undefined) 
                        {
                            var markerPosition = markerObject.getLatLng();
                            if(markerPosition.lat == this.parentNode.parentNode.childNodes[1].textContent || markerPosition.lng == this.parentNode.parentNode.childNodes[2].textContent)
                            {
                                map.removeLayer(markerObject);
                            }
                        };
                      }
                    });
                    
                    
                    
                    
                });
                deleteButtonCell.appendChild(deleteButton);
                row.appendChild(deleteButtonCell);


                

                const showButtonCell = document.createElement('td');
                const showButton = document.createElement('button');
                showButton.style.width = '90px';
                showButton.textContent = 'Göster';
                showButton.id = 'show-button'
                showButton.addEventListener('click', function() {
                    // Satırın ID'sini al ve işlem yap
                    const rowId = parseInt(this.parentNode.parentNode.firstElementChild.textContent);
                    //getdatabyid
                    getDataById(rowId);
                });
                
                deleteButtonCell.style.textAlign = 'center';
                deleteButtonCell.appendChild(showButton);
                row.appendChild(deleteButtonCell);


                dataTable.appendChild(row);
            });

        } else {
            console.error('Veri alma hatası:', response.status);
        }
    } catch (error) {
        console.error('İstek hatası:', error);
    }
}