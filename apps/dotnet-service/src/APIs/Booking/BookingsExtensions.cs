using DotnetService.APIs.Dtos;
using DotnetService.Infrastructure.Models;

namespace DotnetService.APIs.Extensions;

public static class BookingsExtensions
{
    public static Booking ToDto(this BookingDbModel model)
    {
        return new Booking
        {
            CheckInDate = model.CheckInDate,
            CheckOutDate = model.CheckOutDate,
            Comment = model.Comment,
            CreatedAt = model.CreatedAt,
            Customer = model.CustomerId,
            Description = model.Description,
            Id = model.Id,
            Name = model.Name,
            Payments = model.Payments?.Select(x => x.Id).ToList(),
            Room = model.RoomId,
            TotalPrice = model.TotalPrice,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static BookingDbModel ToModel(
        this BookingUpdateInput updateDto,
        BookingWhereUniqueInput uniqueId
    )
    {
        var booking = new BookingDbModel
        {
            Id = uniqueId.Id,
            CheckInDate = updateDto.CheckInDate,
            CheckOutDate = updateDto.CheckOutDate,
            Comment = updateDto.Comment,
            Description = updateDto.Description,
            Name = updateDto.Name,
            TotalPrice = updateDto.TotalPrice
        };

        if (updateDto.CreatedAt != null)
        {
            booking.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.Customer != null)
        {
            booking.CustomerId = updateDto.Customer;
        }
        if (updateDto.Room != null)
        {
            booking.RoomId = updateDto.Room;
        }
        if (updateDto.UpdatedAt != null)
        {
            booking.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return booking;
    }
}
