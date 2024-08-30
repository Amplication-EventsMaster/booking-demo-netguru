using DotnetService.Infrastructure;

namespace DotnetService.APIs;

public class PaymentsService : PaymentsServiceBase
{
    public PaymentsService(DotnetServiceDbContext context)
        : base(context) { }
}
