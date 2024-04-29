using Business.Services;
using Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class MapController : ControllerBase
{
    private readonly IMapService _mapService;

    public MapController(MapService mapService)
    {
        _mapService = mapService;
    }

    [HttpGet("GetData")]
    public IActionResult GetData()
    {
        try
        {
            List<MapModel> data = _mapService.GetData();
            return Ok(data);
        }
        catch (Exception ex)
        {
            return BadRequest($"Veri alınamadı. Hata: {ex.Message}");
        }
    }

    [HttpGet("GetData/{id}")]
    public IActionResult GetData(int id)
    {
        try
        {
            MapModel data = _mapService.GetData(id);
            if (data.id == 0)
            {
                return BadRequest();
            }


            return Ok(data);
        }
        catch (Exception ex)
        {
            return BadRequest($"Veri alınamadı. Hata: {ex.Message}");
        }
    }

    [HttpPost("AddData")]
    public IActionResult AddData([FromBody] MapModel model)
    {
        try
        {
            _mapService.AddData(model);
            return Ok("Veri başarıyla eklendi.");
        }
        catch (Exception ex)
        {
            return BadRequest($"Veri eklenirken hata oluştu. Hata: {ex.Message}");
        }
    }

    [HttpPost("DeleteData/{id}")]
    public IActionResult DeleteData(int id)
    {
        try
        {
           _mapService.DeleteData(id);
            return Ok("Veri başarıyla silindi.");
        }
        catch (Exception ex)
        {
            return BadRequest($"Veri silinirken bir hata oluştu. Hata: {ex.Message}");
        }
    }

}
