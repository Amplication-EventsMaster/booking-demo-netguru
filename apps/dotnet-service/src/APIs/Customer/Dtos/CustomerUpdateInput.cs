namespace DotnetService.APIs.Dtos;

public class CustomerUpdateInput
{
    public List<string>? Bookings { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? Description { get; set; }

    public string? Email { get; set; }

    public string? Id { get; set; }

    public string? Name { get; set; }

    public string? PhoneNumber { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
