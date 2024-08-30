using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DotnetService.Core.Enums;

namespace DotnetService.Infrastructure.Models;

[Table("Payments")]
public class PaymentDbModel
{
    [Range(0, 99999999999)]
    public double? Amount { get; set; }

    public string? BookingId { get; set; }

    [ForeignKey(nameof(BookingId))]
    public BookingDbModel? Booking { get; set; } = null;

    [Required()]
    public DateTime CreatedAt { get; set; }

    [StringLength(256)]
    public string? Description { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(256)]
    public string? Name { get; set; }

    public DateTime? PaymentDate { get; set; }

    public StatusEnum? Status { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
