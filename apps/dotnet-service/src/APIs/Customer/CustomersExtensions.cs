using DotnetService.APIs.Dtos;
using DotnetService.Infrastructure.Models;

namespace DotnetService.APIs.Extensions;

public static class CustomersExtensions
{
    public static Customer ToDto(this CustomerDbModel model)
    {
        return new Customer
        {
            Bookings = model.Bookings?.Select(x => x.Id).ToList(),
            CreatedAt = model.CreatedAt,
            Description = model.Description,
            Email = model.Email,
            Id = model.Id,
            Name = model.Name,
            PhoneNumber = model.PhoneNumber,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static CustomerDbModel ToModel(
        this CustomerUpdateInput updateDto,
        CustomerWhereUniqueInput uniqueId
    )
    {
        var customer = new CustomerDbModel
        {
            Id = uniqueId.Id,
            Description = updateDto.Description,
            Email = updateDto.Email,
            Name = updateDto.Name,
            PhoneNumber = updateDto.PhoneNumber
        };

        if (updateDto.CreatedAt != null)
        {
            customer.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            customer.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return customer;
    }
}
