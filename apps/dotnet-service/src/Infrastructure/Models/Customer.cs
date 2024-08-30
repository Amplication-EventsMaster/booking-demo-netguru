using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotnetService.Infrastructure.Models;

[Table("Customers")]
public class CustomerDbModel
{
    public List<BookingDbModel>? Bookings { get; set; } = new List<BookingDbModel>();

    [Required()]
    public DateTime CreatedAt { get; set; }

    [StringLength(256)]
    public string? Description { get; set; }

    [StringLength(256)]
    public string? Email { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(256)]
    public string? Name { get; set; }

    [StringLength(256)]
    public string? PhoneNumber { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
