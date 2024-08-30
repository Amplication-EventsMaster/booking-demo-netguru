using DotnetService.APIs.Dtos;
using DotnetService.Infrastructure.Models;

namespace DotnetService.APIs.Extensions;

public static class PaymentsExtensions
{
    public static Payment ToDto(this PaymentDbModel model)
    {
        return new Payment
        {
            Amount = model.Amount,
            Booking = model.BookingId,
            CreatedAt = model.CreatedAt,
            Description = model.Description,
            Id = model.Id,
            Name = model.Name,
            PaymentDate = model.PaymentDate,
            Status = model.Status,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static PaymentDbModel ToModel(
        this PaymentUpdateInput updateDto,
        PaymentWhereUniqueInput uniqueId
    )
    {
        var payment = new PaymentDbModel
        {
            Id = uniqueId.Id,
            Amount = updateDto.Amount,
            Description = updateDto.Description,
            Name = updateDto.Name,
            PaymentDate = updateDto.PaymentDate,
            Status = updateDto.Status
        };

        if (updateDto.Booking != null)
        {
            payment.BookingId = updateDto.Booking;
        }
        if (updateDto.CreatedAt != null)
        {
            payment.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            payment.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return payment;
    }
}
