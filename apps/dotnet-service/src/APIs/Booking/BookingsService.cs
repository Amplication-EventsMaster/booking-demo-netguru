using DotnetService.Infrastructure;

namespace DotnetService.APIs;

public class BookingsService : BookingsServiceBase
{
    public BookingsService(DotnetServiceDbContext context)
        : base(context) { }
}
