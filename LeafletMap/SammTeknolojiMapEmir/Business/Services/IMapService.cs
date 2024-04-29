using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface IMapService
    {
        public List<MapModel> GetData();

        public MapModel GetData(int id);

        public void DeleteData(int id);

        public void AddData(MapModel model);
    }
}
