using Data.Models;
using Newtonsoft.Json;

namespace Business.Services
{
    public class MapService: IMapService
    {
        public List<MapModel> GetData()
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "../Data/Json");
            string filePath = Path.Combine(directoryPath, "data.json");

            if (System.IO.File.Exists(filePath))
            {
                // Dosya varsa, içeriği oku
                string jsonContent = System.IO.File.ReadAllText(filePath);

                // JSON içeriğini bir List<MapModel> olarak deserialize et
                return JsonConvert.DeserializeObject<List<MapModel>>(jsonContent);
            }
            else
            {
                return new List<MapModel>();
            }
        }

        public MapModel GetData(int id)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "../Data/Json");
            string filePath = Path.Combine(directoryPath, "data.json");

            if (System.IO.File.Exists(filePath))
            {
                // Dosya varsa, içeriği oku
                string jsonContent = System.IO.File.ReadAllText(filePath);

                var datas = JsonConvert.DeserializeObject<List<MapModel>>(jsonContent);
                var data = datas.Find(u => u.id == id);

                if(data != null)
                {
                    return data;
                }
                else
                {
                    return new MapModel();
                }
                // JSON içeriğini bir MapModel olarak deserialize et
            }
            else
            {
                return new MapModel();
            }
        }

        public void AddData(MapModel model)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "../Data/Json");
            if (!Directory.Exists(directoryPath))
                Directory.CreateDirectory(directoryPath);

            string filePath = Path.Combine(directoryPath, "data.json");

            // Dosya varsa, mevcut içeriği oku
            string existingJson = "";
            if (System.IO.File.Exists(filePath))
            {
                existingJson = System.IO.File.ReadAllText(filePath);
            }

            // Mevcut içeriği deserialize et
            List<MapModel> existingModels = JsonConvert.DeserializeObject<List<MapModel>>(existingJson) ?? new List<MapModel>();

            //Gelen modelin id sini, mevcut son id yi bir artırarak eşitler.
            if(existingModels.Count > 0)
                model.id = existingModels.OrderByDescending(u => u.id).FirstOrDefault().id + 1;
            else
                model.id = 1;

            // Yeni veriyi mevcut modele ekle
            existingModels.Add(model);

            // Güncellenmiş veriyi serialize et
            string updatedJson = JsonConvert.SerializeObject(existingModels);

            // Dosyayı güncellenmiş veriyle tekrar yaz
            System.IO.File.WriteAllText(filePath, updatedJson);
        }

        public void DeleteData(int id)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "../Data/Json");
            string filePath = Path.Combine(directoryPath, "data.json");

            if (System.IO.File.Exists(filePath))
            {
                // Dosya varsa, içeriği oku
                string jsonContent = System.IO.File.ReadAllText(filePath);

                var datas = JsonConvert.DeserializeObject<List<MapModel>>(jsonContent);
                var data = datas.Find(u => u.id == id);

                datas.Remove(data);

                // Güncellenmiş veriyi serialize et
                string updatedJson = JsonConvert.SerializeObject(datas);

                // Dosyayı güncellenmiş veriyle tekrar yaz
                System.IO.File.WriteAllText(filePath, updatedJson);
            }

        }
    }
}
