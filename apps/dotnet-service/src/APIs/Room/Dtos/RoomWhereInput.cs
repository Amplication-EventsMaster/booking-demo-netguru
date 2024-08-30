using DotnetService.Core.Enums;

namespace DotnetService.APIs.Dtos;

public class RoomWhereInput
{
    public List<string>? Bookings { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? Description { get; set; }

    public string? Hotel { get; set; }

    public string? Id { get; set; }

    public string? Name { get; set; }

    public double? Price { get; set; }

    public string? RoomNumber { get; set; }

    public TypeFieldEnum? TypeField { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
