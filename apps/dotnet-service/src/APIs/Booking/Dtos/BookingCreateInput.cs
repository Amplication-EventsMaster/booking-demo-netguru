namespace DotnetService.APIs.Dtos;

public class BookingCreateInput
{
    public DateTime? CheckInDate { get; set; }

    public DateTime? CheckOutDate { get; set; }

    public string? Comment { get; set; }

    public DateTime CreatedAt { get; set; }

    public Customer? Customer { get; set; }

    public string? Description { get; set; }

    public string? Id { get; set; }

    public string? Name { get; set; }

    public List<Payment>? Payments { get; set; }

    public Room? Room { get; set; }

    public double? TotalPrice { get; set; }

    public DateTime UpdatedAt { get; set; }
}
