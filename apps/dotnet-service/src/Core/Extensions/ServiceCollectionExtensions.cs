using DotnetService.APIs;

namespace DotnetService;

public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Add services to the container.
    /// </summary>
    public static void RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IBookingsService, BookingsService>();
        services.AddScoped<ICustomersService, CustomersService>();
        services.AddScoped<IHotelsService, HotelsService>();
        services.AddScoped<IPaymentsService, PaymentsService>();
        services.AddScoped<IRoomsService, RoomsService>();
    }
}
