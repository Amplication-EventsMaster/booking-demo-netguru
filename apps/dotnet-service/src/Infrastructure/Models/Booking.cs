using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotnetService.Infrastructure.Models;

[Table("Bookings")]
public class BookingDbModel
{
    public DateTime? CheckInDate { get; set; }

    public DateTime? CheckOutDate { get; set; }

    [StringLength(256)]
    public string? Comment { get; set; }

    [Required()]
    public DateTime CreatedAt { get; set; }

    public string? CustomerId { get; set; }

    [ForeignKey(nameof(CustomerId))]
    public CustomerDbModel? Customer { get; set; } = null;

    [StringLength(256)]
    public string? Description { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(256)]
    public string? Name { get; set; }

    public List<PaymentDbModel>? Payments { get; set; } = new List<PaymentDbModel>();

    public string? RoomId { get; set; }

    [ForeignKey(nameof(RoomId))]
    public RoomDbModel? Room { get; set; } = null;

    [Range(0, 99999999999)]
    public double? TotalPrice { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
