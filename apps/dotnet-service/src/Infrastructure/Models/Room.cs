using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DotnetService.Core.Enums;

namespace DotnetService.Infrastructure.Models;

[Table("Rooms")]
public class RoomDbModel
{
    public List<BookingDbModel>? Bookings { get; set; } = new List<BookingDbModel>();

    [Required()]
    public DateTime CreatedAt { get; set; }

    [StringLength(256)]
    public string? Description { get; set; }

    public string? HotelId { get; set; }

    [ForeignKey(nameof(HotelId))]
    public HotelDbModel? Hotel { get; set; } = null;

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(256)]
    public string? Name { get; set; }

    [Range(0, 99999999999)]
    public double? Price { get; set; }

    [StringLength(256)]
    public string? RoomNumber { get; set; }

    public TypeFieldEnum? TypeField { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
