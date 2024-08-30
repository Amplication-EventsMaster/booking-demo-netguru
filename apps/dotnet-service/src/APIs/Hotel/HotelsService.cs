using DotnetService.Infrastructure;

namespace DotnetService.APIs;

public class HotelsService : HotelsServiceBase
{
    public HotelsService(DotnetServiceDbContext context)
        : base(context) { }
}
