using DotnetService.Core.Enums;

namespace DotnetService.APIs.Dtos;

public class Payment
{
    public double? Amount { get; set; }

    public string? Booking { get; set; }

    public DateTime CreatedAt { get; set; }

    public string? Description { get; set; }

    public string Id { get; set; }

    public string? Name { get; set; }

    public DateTime? PaymentDate { get; set; }

    public StatusEnum? Status { get; set; }

    public DateTime UpdatedAt { get; set; }
}
