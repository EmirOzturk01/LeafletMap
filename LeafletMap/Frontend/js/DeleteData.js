async function deleteData(id) {
    try {
        const response = await fetch(`http://localhost:5126/api/Map/DeleteData/${id}`, {
            method: 'POST',
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Başarılı',
                text: 'Veri başarıyla silindi!',
            });
            console.log('Veri başarıyla silindi.');
            getDataAndDisplayTable(); // Tabloyu yenilemek için
            return "OK";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Başarısız',
                text: `Veri silme hatası: ${response.status}`,
            });
            console.error('Veri silme hatası:', response.status);
            return "ERROR";
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: `İstek Hatası: ${error}`,
        });
        console.error('İstek hatası:', error);
        return "ERROR";
    }
}