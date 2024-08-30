using DotnetService.Infrastructure;

namespace DotnetService.APIs;

public class RoomsService : RoomsServiceBase
{
    public RoomsService(DotnetServiceDbContext context)
        : base(context) { }
}
