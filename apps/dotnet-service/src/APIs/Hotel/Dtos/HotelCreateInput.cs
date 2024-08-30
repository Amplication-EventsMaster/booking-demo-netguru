namespace DotnetService.APIs.Dtos;

public class HotelCreateInput
{
    public string? Address { get; set; }

    public DateTime CreatedAt { get; set; }

    public string? Description { get; set; }

    public string? Id { get; set; }

    public string? Name { get; set; }

    public string? PhoneNumber { get; set; }

    public double? Rating { get; set; }

    public List<Room>? Rooms { get; set; }

    public DateTime UpdatedAt { get; set; }
}
