using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotnetService.Infrastructure.Models;

[Table("Hotels")]
public class HotelDbModel
{
    [StringLength(256)]
    public string? Address { get; set; }

    [Required()]
    public DateTime CreatedAt { get; set; }

    [StringLength(256)]
    public string? Description { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(256)]
    public string? Name { get; set; }

    [StringLength(256)]
    public string? PhoneNumber { get; set; }

    [Range(0, 99999999999)]
    public double? Rating { get; set; }

    public List<RoomDbModel>? Rooms { get; set; } = new List<RoomDbModel>();

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
