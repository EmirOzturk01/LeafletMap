# LeafletMap
Bu projede leaflet haritası üzerinden lokasyon kaydetme ve gösterme işlemi yapılmıştır. Backend olarak C# ASP .Net Core Web Api kullanılmıştır. 

# Projedeki İsterler
- Sayfaya leaflet.js ile bir harita yerleştirilmesi.
- “Noktayı Kaydet” adında, haritanın ortasındaki bir noktanın koordinat bilgilerini kaydeden buton bulunması.
- Bilgilerin tarih ile birlikte bir .json dosyasında tutulması.
- Daha önce eklenmiş olan verilerin tabloda gösterilmesi.
- Gösterilen Verilerin harita üzerinde marker yardımıyla gösterilmesi ve istenildiği zaman tablodan silinebilmesi.
- Sayfa yenilendiğinde tablonun yenilenmesi.
- JSON dosyasının istenildiğinde indirilebilmesi.
- Frontend ve Backend in ayrı geliştirilmesi.
- Model’in aşağıda gösterildiği şekilde gibi olması.
  
[{
"id":0
"lat": "37.05612",
"lng": "29.10999"
"datetime": "2021-08-14T06:35:13Z"
},{
"id":1
"lat": "33.61441",
"lng": "32.29111"
"datetime": "2021-08-14T07:22:15Z"
}]

# Projenin düzgün çalışabilmesi için gerekli programlar ve eklentiler
- .Net 8
- Visual Studio 2022
- Visual Studio Code
- Visual Studio Code Extension: Live Server

# Projenin Başlatılması
İlk olarak SammTeknolojiMapEmir dosyasındaki sln uzantılı dosya Visual Studio 2022 ile açılmalı. Açılan Projenin http olarak başlatılması gerekiyor. Frontend tarafı içinse, Visual Studio Code içerisinden bir dosya aç diyerek Frontend dosyasını seçiyor ve karşımıza çıkan ekranda bu yazara güven seçeneğini seçmemiz gerekiyor. Yüklü değil ise extensions kısmından Live Server eklentisini kurmanız gerekmektedir. Kurduktan sonra index.html e sağ tıklayarak 'Open With Live Server' seçerek projeyi başlatıyoruz.
C# tarafında başlatırken ISS sertifika hatası alırsanız Evet diyerek geçin.

# Projenin Başlatılmasına İlişkin Video
https://www.youtube.com/watch?v=UyZJ-eOlJgk


# Endpointler
![Ekran görüntüsü 2024-04-30 033718](https://github.com/EmirOzturk01/LeafletMap/assets/104322642/55efbfda-ccf5-4ccf-99a6-3ff041161bf6)

# Ana Ekran
![Ekran görüntüsü 2024-04-30 033810](https://github.com/EmirOzturk01/LeafletMap/assets/104322642/82e470b3-520f-49a0-a9db-047cece0f917)


